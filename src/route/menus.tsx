import { HomeOutlined } from '@ant-design/icons'

interface IRoute {
  path: string
  name: string
  icon?: React.ReactNode
  hideInMenu?: boolean
}

export const ROUTE_KEY = {
  HOME: 'home',
  NOT_FOUND: '404',
  MY: 'my',
  ORG: 'org',
}
export type RouteKey = keyof typeof ROUTE_KEY

export const ROUTE_CONFIG: Record<string, IRoute> = {
  [ROUTE_KEY.HOME]: {
    path: 'home',
    name: '首页',
    icon: <HomeOutlined />,
  },
  [ROUTE_KEY.ORG]: {
    path: 'org',
    name: '门店信息',
    hideInMenu: true,
    icon: <HomeOutlined />,
  },
  [ROUTE_KEY.MY]: {
    path: 'my',
    name: '个人信息',
    hideInMenu: true,
    icon: <HomeOutlined />,
  },
  [ROUTE_KEY.NOT_FOUND]: {
    path: '*',
    hideInMenu: true,
    name: '404',
  },
}

export const routes = Object.keys(ROUTE_CONFIG).map((key) => ({
  ...ROUTE_CONFIG[key],
  key,
}))

export const getRouteByKey = (key: string) => {
  return ROUTE_CONFIG[key]
}
