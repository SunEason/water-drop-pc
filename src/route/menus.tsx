import { HomeOutlined, PicRightOutlined } from '@ant-design/icons'

interface IRoute {
  path: string
  name: string
  icon?: React.ReactNode
  hideInMenu?: boolean
}

export const ROUTE_KEY = {
  HOME: 'home',
  NOT_FOUND: 'p404',
  MY: 'my',
  ORG: 'org',
  ORG_EMPTY: 'org_empty',
  COURSE: 'course',
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
  },
  [ROUTE_KEY.MY]: {
    path: 'my',
    name: '个人信息',
    hideInMenu: true,
  },
  [ROUTE_KEY.ORG_EMPTY]: {
    path: 'org_empty',
    name: '未选择门店',
    hideInMenu: true,
  },
  [ROUTE_KEY.NOT_FOUND]: {
    path: '*',
    hideInMenu: true,
    name: '404',
  },
  [ROUTE_KEY.COURSE]: {
    path: 'course',
    name: '课程信息',
    icon: <PicRightOutlined />,
  },
}

export const routes = Object.keys(ROUTE_CONFIG).map((key) => ({
  ...ROUTE_CONFIG[key],
  key,
}))

export const getRouteByKey = (key: string) => {
  return ROUTE_CONFIG[key]
}
