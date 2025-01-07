import { MenuDataItem, ProLayout } from '@ant-design/pro-components'

import style from './index.module.less'
import { Link, useNavigate, useOutlet } from 'react-router-dom'
import { useUserContext } from '@/store/user'
import { ROUTE_KEY, routes } from '@/route/menus'
import { Dropdown } from 'antd'
import { HomeOutlined, LogoutOutlined } from '@ant-design/icons'
import { useRouter } from '@/hooks'

const menuItemRender = (props: MenuDataItem, defaultDom: React.ReactNode) => {
  return <Link to={props.path || '/'}>{defaultDom}</Link>
}

function Layout() {
  const outlet = useOutlet()
  const nav = useNavigate()
  const router = useRouter()
  const { store } = useUserContext()

  const layout = () => {
    sessionStorage.setItem(import.meta.env.VITE_AUTH_TOKEN, '')
    localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN, '')
    nav('/login')
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
      menuItemRender={menuItemRender}
    >
      {outlet}
    </ProLayout>
  )
}

export default Layout
