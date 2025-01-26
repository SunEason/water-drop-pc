import { Course } from '@/generated'
import { ProColumns } from '@ant-design/pro-components'
import { Button } from 'antd'

export const columns: ProColumns<Course>[] = [
  {
    title: '课程标题',
    dataIndex: 'name',
    ellipsis: true,
    copyable: true,
  },
  {
    title: '限制人数',
    dataIndex: 'limitNumber',
    width: 75,
    search: false,
  },
  {
    title: '持续时长',
    dataIndex: 'duration',
    width: 75,
    search: false,
  },
  {
    title: '操作',
    valueType: 'option',
    width: 80,
    render: (_, record) => {
      return (
        <Button type="link" onClick={() => console.log(record)}>
          编辑
        </Button>
      )
    },
  },
]
