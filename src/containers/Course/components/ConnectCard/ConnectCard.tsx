import { Drawer, Form, message } from 'antd'
// import { useEffect, useMemo, useState } from 'react'
import { EditableProTable } from '@ant-design/pro-components'
import {
  Card,
  CardInput,
  CardType,
  Method,
  useCardsQuery,
  useCommitCardMutation,
  useRemoveCardMutation,
} from '@/generated'
import { useEffect, useState } from 'react'
import { getColumns } from './contents'
// import { ChromeOutlined, RedoOutlined } from '@ant-design/icons'
// import { useGetOrderTimeQuery, useSetOrderTimeMutation } from '@/generated'

interface IProps {
  id: string
  onClose: () => void
}

function ConnectCard({ id, onClose }: IProps) {
  const [form] = Form.useForm()

  const {
    data,
    loading: querying,
    refetch,
  } = useCardsQuery({
    variables: {
      courseId: id,
    },
  })
  const [cards, setCards] = useState<Card[]>()

  useEffect(() => {
    setCards(data?.cards || [])
  }, [data])

  const [submit] = useCommitCardMutation()
  const [remove] = useRemoveCardMutation()

  const onSubmit = async (method: Method, id: string, input: CardInput) => {
    await submit({
      variables: {
        commitId: id,
        input: {
          type: input.type,
          times: input.times,
          name: input.name,
          duration: input.duration,
        },
        method,
      },
      onError: () => {
        message.error(`保存失败`)
      },
      onCompleted: () => {
        message.success(`保存成功`)
        refetch()
      },
    })
  }

  const onDelete = async (id: string) => {
    await remove({
      variables: {
        id,
      },
      onError: () => {
        message.error(`删除失败`)
      },
      onCompleted: () => {
        message.success(`删除成功`)
        refetch()
      },
    })
  }

  return (
    <Drawer
      title="关联消费卡"
      onClose={onClose}
      open
      width={720}
      styles={{
        footer: {
          textAlign: 'right',
        },
      }}
    >
      <EditableProTable<Omit<Card, 'createTime'>>
        rowKey="id"
        loading={querying}
        editable={{
          form: form,
          actionRender: (_row, _config, defaultDoms) => {
            return [defaultDoms.save, defaultDoms.cancel]
          },
          onSave: async (_rowKey, rowData) => {
            // console.log(rowKey, rowData)
            if (rowData.type === CardType.Time && !rowData.times) {
              rowData.duration = 0
              message.error('请输入次数')
              return
            }
            if (rowData.type === CardType.Duration && !rowData.duration) {
              rowData.times = 0
              message.error('请输入次数')
              return
            }
            if (rowData.id === 'new') {
              onSubmit(Method.Create, id, {
                name: rowData.name,
                type: rowData.type,
                times: rowData.times,
                duration: rowData.duration,
              })
              return
            }
            onSubmit(Method.Update, rowData.id, {
              name: rowData.name,
              type: rowData.type,
              times: rowData.times,
              duration: rowData.duration,
            })
          },
        }}
        value={cards}
        recordCreatorProps={{
          record: () => {
            return {
              id: 'new',
              name: '',
              type: CardType.Time,
              times: 0,
              duration: 0,
            }
          },
        }}
        columns={getColumns({ onDelete: onDelete })}
      />
    </Drawer>
  )
}

export default ConnectCard
