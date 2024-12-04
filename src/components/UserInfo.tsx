import { connect, useGetUserInfo } from '../store/user'
import { IPropsChild } from '../types'

function UserInfo({ children }: IPropsChild) {
  useGetUserInfo()
  return <div>{children}</div>
}

export default connect(UserInfo)
