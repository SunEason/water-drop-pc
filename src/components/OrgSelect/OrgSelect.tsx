import styles from './index.module.less'

import { Select } from 'antd'
function OrgSelect() {
  const mockData = [
    { value: 1, label: 'org1' },
    { value: 2, label: 'org2' },
  ]

  const onSearchHandler = (value: string) => {
    console.log(value)
  }

  return (
    <Select
      className={styles.container}
      options={mockData}
      showSearch
      onSearch={onSearchHandler}
      placeholder="请选择门店"
    ></Select>
  )
}

export default OrgSelect
