export const CURRENT_ORG = 'CURRENT_ORG'

interface IOrg {
  value: string
  label: string
}
export const getCurrentOrg = (): IOrg | undefined => {
  try {
    return JSON.parse(localStorage.getItem(CURRENT_ORG) || '')
  } catch (error) {
    console.log(error)
    return undefined
  }
}
