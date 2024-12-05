import { connect, useGetUserInfo } from '@/store/user'
import { IPropsChild } from '@/types'
import { Spin } from 'antd'

function UserInfo({ children }: IPropsChild) {
  const { loading } = useGetUserInfo()
  return (
    <Spin spinning={loading}>
      <div style={{ height: '100vh' }}>{children}</div>
    </Spin>
  )
}

export default connect(UserInfo)
