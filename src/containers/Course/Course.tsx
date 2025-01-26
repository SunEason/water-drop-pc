import { PAGE_SIZE } from '@/const/pagination'
import { usePageCourseQuery } from '@/generated'
import type { Course as ICourse } from '@/generated'
import { PageContainer, ProTable } from '@ant-design/pro-components'
import { columns } from './contents'
import { message } from 'antd'

function Course() {
  const { data, loading, refetch } = usePageCourseQuery({
    variables: {
      input: {
        pageInput: {
          pageSize: 10,
          current: 1,
        },
      },
    },
  })

  return (
    <PageContainer
      loading={loading}
      header={{
        title: '门店课程管理',
      }}
    >
      <ProTable<ICourse>
        dataSource={data?.pageCourse?.courses || []}
        columns={columns}
        pagination={{
          defaultPageSize: PAGE_SIZE,
          showSizeChanger: false,
          total: data?.pageCourse?.pageInfo?.total || 0,
        }}
        request={async (params) => {
          const { data, errors } = await refetch({
            input: {
              pageInput: {
                pageSize: params.pageSize || 10,
                current: params.current || 1,
              },
              name: params.name,
            },
          })
          if (errors) {
            message.error('请求失败')
            console.error(errors)
          }
          return {
            data: data?.pageCourse?.courses || [],
            success: errors ? false : true,
            total: data?.pageCourse?.pageInfo?.total || 0,
          }
        }}
      />
    </PageContainer>
  )
}

export default Course
