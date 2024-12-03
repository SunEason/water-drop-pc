import { connect, useGetUserInfo } from '../store/user'

function UserInfo() {
  useGetUserInfo()
  return null
}

export default connect(UserInfo)
