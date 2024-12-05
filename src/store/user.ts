import { useGetUserInfoQuery } from '@/generated'
import { connectFactory, useStore } from '@/utils/contextFactory'
import { useLocation, useNavigate } from 'react-router-dom'

const key = 'userInfo' as const
const defaultValue = {}
export const useUserContext = () => useStore(key)

export const connect = connectFactory(key, defaultValue)

export const useGetUserInfo = () => {
  const location = useLocation()
  const nav = useNavigate()
  const { setStore } = useUserContext()
  const { loading } = useGetUserInfoQuery({
    onCompleted: (data) => {
      if (data.getUserInfo) {
        setStore(data.getUserInfo)
        if (location.pathname.startsWith('/login')) {
          nav('/')
        }
        return
      }
      if (location.pathname !== '/login') {
        nav(`/login?orgUrl=${location.pathname}`)
      }
    },
    onError: () => {
      if (location.pathname !== '/login') {
        nav(`/login?orgUrl=${location.pathname}`)
      }
    },
  })

  return { loading }
}
