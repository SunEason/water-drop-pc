import { MenuDataItem, ProLayout } from '@ant-design/pro-components'

import style from './index.module.less'
import { Link, useNavigate, useOutlet } from 'react-router-dom'
import { useUserContext } from '@/store/user'
import { ROUTE_CONFIG, ROUTE_KEY, routes } from '@/route/menus'
import { Dropdown, Tooltip } from 'antd'
import { HomeOutlined, LogoutOutlined, ShopOutlined } from '@ant-design/icons'
import { useRoute, useRouter } from '@/hooks/router'
import OrgSelect from '@/components/OrgSelect'

const menuItemRender = (props: MenuDataItem, defaultDom: React.ReactNode) => {
  return <Link to={props.path || '/'}>{defaultDom}</Link>
}

function Layout() {
  const outlet = useOutlet()
  const nav = useNavigate()
  const router = useRouter()
  const route = useRoute()
  const { store } = useUserContext()

  const isOrgManage = () => {
    if (route?.path === ROUTE_CONFIG[ROUTE_KEY.ORG].path) {
      return true
    }
    return false
  }

  const layout = () => {
    sessionStorage.setItem(import.meta.env.VITE_AUTH_TOKEN, '')
    localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN, '')
    nav('/login')
  }

  const gotoOrg = () => {
    router.go(ROUTE_KEY.ORG)
  }

  return (
    <ProLayout
      layout="mix"
      siderWidth={150}
      avatarProps={{
        src: store.avatar || null,
        size: 'small',
        title: store.name,
        render: (_props, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
                  {
                    key: 'userInfo',
                    icon: <HomeOutlined />,
                    label: '个人中心',
                    onClick: () => router.go(ROUTE_KEY.MY),
                  },
                  {
                    key: 'logout',
                    icon: <LogoutOutlined />,
                    label: '退出登录',
                    onClick: layout,
                  },
                ],
              }}
            >
              {dom}
            </Dropdown>
          )
        },
      }}
      title={false}
      logo={
        <img
          src="https://ballentin-learn-oss.oss-cn-shanghai.aliyuncs.com/img/logo.png"
          alt="logo"
        />
      }
      onMenuHeaderClick={() => {
        nav('/')
      }}
      className={style.container}
      route={{
        path: '/',
        routes: routes,
      }}
      actionsRender={() => [
        <div key={1}>{!isOrgManage() && <OrgSelect />}</div>,
        <Tooltip key={2} title="门店管理">
          <ShopOutlined onClick={gotoOrg} />
        </Tooltip>,
      ]}
      menuItemRender={menuItemRender}
    >
      <div key={store.currentOrg}>{outlet}</div>
    </ProLayout>
  )
}

export default Layout
