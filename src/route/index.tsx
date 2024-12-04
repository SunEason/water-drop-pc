import Home from '@/containers/Home'
import Login from '@/containers/Login'

export const routes = [
  {
    path: '/',
    element: Home,
    title: '首页',
  },
  {
    path: '/login',
    element: Login,
    title: '登录',
  },
]
