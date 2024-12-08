import Error404 from '@/containers/Error404'
import Home from '@/containers/Home'
import { HomeOutlined } from '@ant-design/icons'

export const routes = [
  {
    key: 'home',
    path: '/home',
    element: Home,
    name: '首页',
    icon: <HomeOutlined />,
  },
  {
    Key: '404',
    path: '*',
    element: Error404,
    hideInMenu: true,
    name: '404',
  },
]
