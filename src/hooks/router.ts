import { getRouteByKey, routes } from '@/route/menus'
import { useMemo } from 'react'
import { matchPath, useLocation, useNavigate } from 'react-router-dom'

export const useRouter = () => {
  const nav = useNavigate()
  const back = () => nav(-1)
  const go = (pageKey: string, params?: Record<string, string | number>) => {
    if (!pageKey) {
      nav('/')
      return
    }
    const route = getRouteByKey(pageKey)
    if (route && route.path) {
      if (!params) {
        nav(`/${route.path}`)
        return
      }
      const url = route.path.replace(/\/:(\w+)/g, (_: string, exp: string) => {
        return `/${params[exp]}`
      })
      nav(`/${url}`)
    }
  }
  return { back, go }
}

export const useRoute = () => {
  const r = useLocation()
  const route = useMemo(
    () => routes.find((item) => matchPath(`/${item.path}`, r.pathname)),
    [r.pathname],
  )
  return route
}
