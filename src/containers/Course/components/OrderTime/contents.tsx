import { ProColumns } from '@ant-design/pro-components'
import { Popconfirm, Space } from 'antd'

export type TWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'
export interface IDay {
  key: TWeek
  label: string
}

export const DAYS: IDay[] = [
  {
    key: 'monday',
    label: '周一',
  },
  {
    key: 'tuesday',
    label: '周二',
  },
  {
    key: 'wednesday',
    label: '周三',
  },
  {
    key: 'thursday',
    label: '周四',
  },
  {
    key: 'friday',
    label: '周五',
  },
  {
    key: 'saturday',
    label: '周六',
  },
  {
    key: 'sunday',
    label: '周日',
  },
]

export interface IOrderTime {
  startTime: string
  endTime: string
  key: number
}

interface IColumns {
  onDelete: (key: number) => void
}

export const getColumns = ({ onDelete }: IColumns): ProColumns[] => {
  return [
    {
      title: '序号',
      dataIndex: 'key',
      editable: false,
      width: 50,
      align: 'center',
    },
    {
      title: '开始时间',
      dataIndex: 'startTime',
      width: 160,
      valueType: 'time',
      align: 'center',
    },
    {
      title: '结束时间',
      dataIndex: 'endTime',
      width: 160,
      valueType: 'time',
      align: 'center',
    },
    {
      title: '操作',
      valueType: 'option',
      width: 100,
      align: 'center',
      render: (_text, record, _index, action) => (
        <Space>
          <a
            key="edit"
            onClick={() => {
              action?.startEditable?.(record.key)
            }}
          >
            编辑
          </a>
          <Popconfirm
            title="确认"
            description="是否删除该条数据?"
            onConfirm={() => {
              onDelete(record.key)
            }}
          >
            <a key="delete">删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ]
}

export interface IWeekCourse {
  week: TWeek
  orderTime: IOrderTime[]
}
