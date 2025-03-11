import { PAGE_SIZE } from '@/const/pagination'
import {
  ProductStatus,
  useChangeProductStatusMutation,
  usePageProductLazyQuery,
  useRemoveProductMutation,
} from '@/generated'
import { ActionType, PageContainer, ProTable } from '@ant-design/pro-components'
import { getColumns } from './contents'
import { Button, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useRef, useState } from 'react'
import EditProduct from './components/EditProduct'

function Product() {
  const actionRef = useRef<ActionType>()
  const [getProducts, { loading }] = usePageProductLazyQuery()

  const [remove] = useRemoveProductMutation()
  const [changeStatus] = useChangeProductStatusMutation()

  const [showEdit, setShowEdit] = useState(false)
  const [curId, setCurId] = useState('')

  const addProduct = () => {
    setCurId('')
    setShowEdit(true)
  }

  const editProduct = (id: string) => {
    setCurId(id)
    setShowEdit(true)
  }

  const onStatusChangeHandler = (id: string, status: ProductStatus) => {
    changeStatus({
      variables: {
        id,
        status,
      },
      onCompleted: () => {
        if (status === ProductStatus.List) message.success('上架成功')
        else message.success('下架成功')
        actionRef.current?.reload()
      },
      onError: (error) => {
        if (status === ProductStatus.List) message.error('上架失败')
        else message.error('下架失败')
        console.error(error)
      },
    })
  }

  const removeProduct = (id: string) => {
    remove({
      variables: {
        id,
      },
      onCompleted: () => {
        message.success('删除成功')
        actionRef.current?.reload()
      },
      onError: (error) => {
        message.error('删除失败')
        console.error(error)
      },
    })
  }

  return (
    <PageContainer
      header={{
        title: '门店课程管理',
      }}
    >
      <ProTable
        actionRef={actionRef}
        rowKey="id"
        loading={loading}
        columns={getColumns({
          onEditHandler: (id) => editProduct(id),
          onDeleteHandler: (id) => removeProduct(id),
          onStatusChangeHandler: (id, status) =>
            onStatusChangeHandler(id, status),
        })}
        pagination={{
          defaultPageSize: PAGE_SIZE,
          showSizeChanger: false,
        }}
        toolBarRender={() => [
          <Button
            key="add"
            type="primary"
            icon={<PlusOutlined />}
            onClick={addProduct}
          >
            添加课程
          </Button>,
        ]}
        request={async (params) => {
          const { data, error } = await getProducts({
            fetchPolicy: 'no-cache',
            variables: {
              input: {
                pageInput: {
                  pageSize: params.pageSize || 10,
                  current: params.current || 1,
                },
                name: params.name,
              },
            },
          })
          if (error) {
            message.error('请求失败')
            console.error(error)
          }
          return {
            data: data?.pageProduct?.products || [],
            success: error ? false : true,
            total: data?.pageProduct?.pageInfo?.total || 0,
          }
        }}
      />
      {showEdit && (
        <EditProduct
          id={curId}
          onClose={() => setShowEdit(false)}
          // onSuccess={() => actionRef.current?.reload()}
          onSuccess={() => actionRef.current?.reload()}
        />
      )}
    </PageContainer>
  )
}

export default Product
