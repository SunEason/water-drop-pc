import { MenuDataItem, ProLayout } from '@ant-design/pro-components'

import style from './index.module.less'
import { Link, useNavigate, useOutlet } from 'react-router-dom'
import { useUserContext } from '@/store/user'
import { routes } from '@/route/menus'
import { Dropdown } from 'antd'
import { LogoutOutlined } from '@ant-design/icons'

const menuItemRender = (props: MenuDataItem, defaultDom: React.ReactNode) => {
  return <Link to={props.path || '/'}>{defaultDom}</Link>
}

function Layout() {
  const outlet = useOutlet()
  const nav = useNavigate()
  const { store } = useUserContext()

  const layout = () => {
    sessionStorage.setItem(import.meta.env.VITE_AUTH_TOKEN, '')
    localStorage.setItem(import.meta.env.VITE_AUTH_TOKEN, '')
    nav('/login')
  }

  return (
    <ProLayout
      layout="mix"
      siderWidth={130}
      // avatarProps={{
      //   src: '',
      //   title: store.tel,
      //   size: 'small',
      //   onClick: layout,
      // }}
      avatarProps={{
        src: 'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg',
        size: 'small',
        title: store.tel,
        render: (_props, dom) => {
          return (
            <Dropdown
              menu={{
                items: [
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
