import { PageContainer, ProList } from '@ant-design/pro-components'
import styles from './index.module.less'
import { Button, Tag } from 'antd'
import { PAGE_SIZE } from '@/const/pagination'
import { useOrganizationsQuery } from '@/generated'
import { useState } from 'react'

import EditOrg from './components/EditOrg'

function Org() {
  const { data, loading, refetch } = useOrganizationsQuery({
    variables: {
      input: {
        pageInput: {
          pageSize: 10,
          current: 1,
        },
      },
    },
  })

  const [showEdit, setShowEdit] = useState(false)
  const [curId, setCurId] = useState('')

  const addOrg = () => {
    // 新增门店
    setCurId('')
    setShowEdit(true)
  }

  const editOrg = (id: string) => {
    // 编辑门店
    setCurId(id)
    setShowEdit(true)
  }

  const removeOrg = (id: string) => {
    // 编辑门店
    // setCurId(id)
    console.log(id)
  }

  const dataSource = data?.pageOrganization?.organizations?.map((item) => {
    return {
      ...item,
      subTitle: (
        <div>
          {item.tags?.split(',').map((tag) => (
            <Tag color="#5BD8A6" key={tag}>
              {tag}
            </Tag>
          ))}
        </div>
      ),
      actions: [
        <a key="edit" onClick={() => editOrg(item.id)}>
          编辑
        </a>,
        <a key="delete" onClick={() => removeOrg(item.id)}>
          删除
        </a>,
      ],
      content: item.address,
    }
  })
  return (
    <PageContainer
      className={styles.container}
      header={{
        title: '门店管理',
      }}
      extra={[
        <Button key="1" type="primary" onClick={addOrg}>
          新增门店
        </Button>,
      ]}
    >
      <ProList
        pagination={{
          defaultPageSize: PAGE_SIZE,
          showSizeChanger: false,
          total: data?.pageOrganization?.pageInfo?.total || 0,
          onChange: (page, pageSize) => {
            refetch({
              input: {
                pageInput: {
                  pageSize,
                  current: page,
                },
              },
            })
          },
        }}
        loading={loading}
        split
        showActions="hover"
        rowSelection={false}
        grid={{ gutter: 10, column: 2 }}
        metas={{
          title: {
            dataIndex: 'name',
          },
          subTitle: {},
          type: {},
          avatar: {
            dataIndex: 'logo',
          },
          content: {
            dataIndex: 'address',
          },
          actions: {
            cardActionProps: 'extra',
          },
        }}
        dataSource={dataSource || []}
      />
      {showEdit && (
        <EditOrg
          id={curId}
          onClose={() => setShowEdit(false)}
          onSuccess={() => refetch()}
        />
      )}
    </PageContainer>
  )
}

export default Org
