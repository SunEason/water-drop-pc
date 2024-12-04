import { connect, useGetUserInfo } from '@/store/user'
import { IPropsChild } from '@/types'

function UserInfo({ children }: IPropsChild) {
  useGetUserInfo()
  return <div style={{ height: '100vh' }}>{children}</div>
}

export default connect(UserInfo)
