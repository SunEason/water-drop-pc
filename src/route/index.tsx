import Home from '@/containers/Home'
import My from '@/containers/My'
import { ROUTE_KEY } from './menus'
import Error404 from '@/containers/Error404'

export const ROUTE_COMPONENT = {
  [ROUTE_KEY.HOME]: Home,
  [ROUTE_KEY.MY]: My,
  [ROUTE_KEY.NOT_FOUND]: Error404,
}
