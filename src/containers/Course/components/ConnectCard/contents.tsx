import { CardType } from '@/generated'
import { ProColumns } from '@ant-design/pro-components'
import { Popconfirm, Space } from 'antd'

interface IColumns {
  onDelete: (key: string) => void
}
export const getColumns = ({ onDelete }: IColumns): ProColumns[] => {
  return [
    {
      title: '序号',
      dataIndex: 'key',
      editable: false,
      width: 50,
      align: 'center',
      render: (d, r, index) => index + 1,
    },
    {
      title: '名称',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '类型',
      dataIndex: 'type',
      key: 'type',
      valueType: 'select',
      valueEnum: {
        [CardType.Time]: {
          text: '次卡',
        },
        [CardType.Duration]: {
          text: '时间卡',
        },
      },
      render: (_, record) => {
        return record.type === CardType.Time ? '次卡' : '时间卡'
      },
    },
    {
      title: '次数(次）',
      dataIndex: 'times',
      valueType: 'digit',
      key: 'times',
    },
    {
      title: '有效期（天）',
      dataIndex: 'duration',
      valueType: 'digit',
      key: 'duration',
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
              action?.startEditable?.(record.id)
            }}
          >
            编辑
          </a>
          <Popconfirm
            title="确认"
            description="是否删除该条数据?"
            onConfirm={() => {
              onDelete(record.id)
            }}
          >
            <a key="delete">删除</a>
          </Popconfirm>
        </Space>
      ),
    },
  ]
}
// __typename?: 'Card'
// createTime: Scalars['DateTime']['output']
// duration?: Maybe<Scalars['Int']['output']>
// id: Scalars['String']['output']
// name: Scalars['String']['output']
// times?: Maybe<Scalars['Int']['output']>
// type: CardType
// updateTime: Scalars['DateTime']['output']
