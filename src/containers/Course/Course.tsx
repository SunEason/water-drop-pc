import { PAGE_SIZE } from '@/const/pagination'
import { usePageCourseLazyQuery } from '@/generated'
import type { Course as ICourse } from '@/generated'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import { columns } from './contents'
import { message } from 'antd'

function Course() {
  const [getCourses, { loading, error }] = usePageCourseLazyQuery()

  return (
    <PageContainer
      loading={loading}
      header={{
        title: '门店课程管理',
      }}
    >
      <ProTable<ICourse>
        rowKey="id"
        columns={columns}
        pagination={{
          defaultPageSize: PAGE_SIZE,
          showSizeChanger: false,
        }}
        request={async (params) => {
          console.log('first')
          const { data } = await getCourses({
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
    </PageContainer>
  )
}

export default Course
