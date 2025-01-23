export interface IPropsChild {
  children: React.ReactNode
}

export interface IUser {
  id: string
  tel: string
  name: string
  desc?: string | null
  avatar?: string | null
  refreshHandler?: () => void
  currentOrg?: string
}
