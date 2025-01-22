import { useRouter } from '@/hooks/router'
import { ROUTE_KEY } from '@/route/menus'
import { useUserContext } from '@/store/user'
import { Button, Result } from 'antd'
import { useEffect } from 'react'

function OrgEmpty() {
  const { store } = useUserContext()
  const router = useRouter()
  useEffect(() => {
    if (store.currentOrg) {
      router.go(ROUTE_KEY.HOME)
    }
  }, [store.currentOrg])
  return (
    <Result
      status="404"
      title="请选择门店"
      subTitle="所有管理行为都基于门店"
      extra={
        <Button type="primary" href="/">
          返回首页
        </Button>
      }
    />
  )
}

export default OrgEmpty
