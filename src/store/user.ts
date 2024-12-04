import { useGetUserInfoQuery } from '@/generated'
import { connectFactory, useStore } from '@/utils/contextFactory'

const key = 'userInfo' as const
const defaultValue = {}
export const useUserContext = () => useStore(key)

export const connect = connectFactory(key, defaultValue)

export const useGetUserInfo = async () => {
  const { setStore } = useUserContext()
  const { data, error } = await useGetUserInfoQuery()
  if (error) {
    // TODO: 不可以直接跳转，会出发react重新执行，陷入死循环
    if (window.location.pathname !== '/login') {
      window.location.href = '/login'
      return
    }
  }
  if (!data?.getUserInfo) return
  setStore(data.getUserInfo)
}
