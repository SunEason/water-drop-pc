import { PAGE_SIZE } from '@/const/pagination'
import { usePageCourseLazyQuery } from '@/generated'
import type { Course as ICourse } from '@/generated'
import { ActionType, PageContainer, ProTable } from '@ant-design/pro-components'
import { columns } from './contents'
import { Button, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { useRef, useState } from 'react'
import EditCourse from './components/EditCourse'
import OrderTime from './components/OrderTime'

function Course() {
  const actionRef = useRef<ActionType>()
  const [getCourses, { loading }] = usePageCourseLazyQuery()

  const [showEdit, setShowEdit] = useState(false)
  const [showOrderTime, setShowOrderTime] = useState(false)
  const [curId, setCurId] = useState('')

  const addCourse = () => {
    setCurId('')
    setShowEdit(true)
  }

  const editCourse = (id: string) => {
    setCurId(id)
    setShowEdit(true)
  }

  const editOrderTime = (id: string) => {
    setCurId(id)
    setShowOrderTime(true)
  }

  return (
    <PageContainer
      header={{
        title: '门店课程管理',
      }}
    >
      <ProTable<ICourse>
        actionRef={actionRef}
        rowKey="id"
        loading={loading}
        columns={[
          ...columns,
          {
            title: '操作',
            valueType: 'option',
            width: 200,
            align: 'center',
            render: (_, record) => {
              return [
                <Button
                  key="1"
                  type="link"
                  onClick={() => editCourse(record.id)}
                >
                  编辑
                </Button>,
                <Button
                  key="2"
                  type="link"
                  onClick={() => editOrderTime(record.id)}
                >
                  可约时间
                </Button>,
              ]
            },
          },
        ]}
        pagination={{
          defaultPageSize: PAGE_SIZE,
          showSizeChanger: false,
        }}
        toolBarRender={() => [
          <Button
            key="add"
            type="primary"
            icon={<PlusOutlined />}
            onClick={addCourse}
          >
            添加课程
          </Button>,
        ]}
        request={async (params) => {
          const { data, error } = await getCourses({
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
            data: data?.pageCourse?.courses || [],
            success: error ? false : true,
            total: data?.pageCourse?.pageInfo?.total || 0,
          }
        }}
      />
      {showEdit && (
        <EditCourse
          id={curId}
          onClose={() => setShowEdit(false)}
          // onSuccess={() => actionRef.current?.reload()}
          onSuccess={() => actionRef.current?.reload()}
        />
      )}
      {showOrderTime && (
        <OrderTime
          id={curId}
          onClose={() => setShowOrderTime(false)}
        ></OrderTime>
      )}
    </PageContainer>
  )
}

export default Course
