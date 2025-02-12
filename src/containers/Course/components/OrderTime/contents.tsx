import { Weekday } from '@/generated'
import { ProColumns } from '@ant-design/pro-components'
import { Popconfirm, Space } from 'antd'
import dayjs, { Dayjs } from 'dayjs'

export type TWeek =
  | 'monday'
  | 'tuesday'
  | 'wednesday'
  | 'thursday'
  | 'friday'
  | 'saturday'
  | 'sunday'
export interface IDay {
  key: Weekday
  label: string
}

export const DAYS: IDay[] = [
  {
    key: Weekday.Monday,
    label: '周一',
  },
  {
    key: Weekday.Tuesday,
    label: '周二',
  },
  {
    key: Weekday.Wednesday,
    label: '周三',
  },
  {
    key: Weekday.Thursday,
    label: '周四',
  },
  {
    key: Weekday.Friday,
    label: '周五',
  },
  {
    key: Weekday.Saturday,
    label: '周六',
  },
  {
    key: Weekday.Sunday,
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
  week: Weekday
  orderTime: IOrderTime[]
}

export const formatTime = (time: Dayjs | string) => {
  if (dayjs.isDayjs(time)) {
    return time.format('HH:mm:ss')
  }
  return time
}
export const isWorkDay = (key: Weekday) => {
  return [
    Weekday.Monday,
    Weekday.Tuesday,
    Weekday.Wednesday,
    Weekday.Thursday,
    Weekday.Friday,
  ].includes(key)
}

export const getMaxKey = (orderTimes?: IOrderTime[]) => {
  const keys = orderTimes?.map((item) => item.key) || []
  if (keys.length === 0) return 0
  return Math.max(...keys)
}
