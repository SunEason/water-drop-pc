import { ROUTE_KEY } from './menus'

import Home from '@/containers/Home'
import My from '@/containers/My'
import Error404 from '@/containers/Error404'
import Org from '@/containers/Org'
import OrgEmpty from '@/containers/OrgEmpty'
import Course from '@/containers/Course'

export const ROUTE_COMPONENT = {
  [ROUTE_KEY.HOME]: Home,
  [ROUTE_KEY.MY]: My,
  [ROUTE_KEY.NOT_FOUND]: Error404,
  [ROUTE_KEY.ORG]: Org,
  [ROUTE_KEY.ORG_EMPTY]: OrgEmpty,
  [ROUTE_KEY.COURSE]: Course,
}
