import { useSelectOrganizationsQuery } from '@/generated'
import styles from './index.module.less'
import { debounce } from 'lodash'

import { message, Select } from 'antd'
import { useEffect, useState } from 'react'
import { useUserContext } from '@/store/user'
import { useRouter } from '@/hooks/router'
import { ROUTE_KEY } from '@/route/menus'
import { CURRENT_ORG, getCurrentOrg } from '@/utils/org'

function OrgSelect() {
  const { setStore } = useUserContext()
  const router = useRouter()

  const [name, setName] = useState('')
  const [pageInput] = useState({
    pageSize: 10,
    current: 1,
  })

  const { data, loading, error, refetch } = useSelectOrganizationsQuery({
    variables: {
      input: {
        pageInput,
      },
    },
  })

  useEffect(() => {
    const currentOrg = getCurrentOrg()?.value
    if (currentOrg) {
      setStore({
        currentOrg: currentOrg,
      })
    } else {
      router.go(ROUTE_KEY.ORG_EMPTY)
    }
  }, [])

  if (error) {
    message.error('获取门店信息失败')
    console.log(error)
  }
  const onSearchHandler = (value: string) => {
    setName(value)
    refetch({
      input: {
        pageInput,
        name: value,
      },
    })
  }

  const onPopupScrollHandler = (e: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = e.currentTarget
    if (scrollTop + clientHeight >= scrollHeight) {
      refetch({
        input: {
          pageInput: {
            pageSize: pageInput.pageSize,
            current: pageInput.current + 1,
          },
          name: name,
        },
      })
    }
  }

  const onChangeHandler = (value: { value: string; label: string }) => {
    setStore({
      currentOrg: value.value,
    })
    localStorage.setItem(CURRENT_ORG, JSON.stringify(value))
  }

  return (
    <Select
      className={styles.container}
      defaultValue={getCurrentOrg()}
      fieldNames={{ value: 'id', label: 'name' }}
      loading={loading}
      options={data?.pageOrganization?.organizations || undefined}
      filterOption={false}
      showSearch
      placeholder="请选择门店"
      onSearch={debounce(onSearchHandler, 300)}
      onPopupScroll={debounce(onPopupScrollHandler, 300)}
      onChange={onChangeHandler}
      labelInValue
    ></Select>
  )
}

export default OrgSelect
