import { Drawer } from 'antd'
// import { useEffect, useMemo, useState } from 'react'
import { EditableProTable } from '@ant-design/pro-components'
import { Card, CardType, useCardsQuery } from '@/generated'
import { useEffect, useState } from 'react'
import { getColumns } from './contents'
// import { ChromeOutlined, RedoOutlined } from '@ant-design/icons'
// import { useGetOrderTimeQuery, useSetOrderTimeMutation } from '@/generated'

interface IProps {
  id: string
  onClose: () => void
}

function ConnectCard({ id, onClose }: IProps) {
  const { data, loading: querying } = useCardsQuery({
    variables: {
      courseId: id,
    },
  })
  const [cards, setCards] = useState<Card[]>()

  useEffect(() => {
    setCards(data?.cards || [])
  }, [data])

  const onDelete = (key: string) => {
    alert(key)
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
          // form: form,
          actionRender: (_row, _config, defaultDoms) => {
            return [defaultDoms.save, defaultDoms.cancel]
          },
          // onValuesChange(record, dataSource) {
          //   console.log(record, dataSource)
          // },
          onSave: async (rowKey, d) => {
            console.log(rowKey, d)
            // const values = await form.validateFields()
            // const startTime = formatTime(values[d.key].startTime)
            // const endTime = formatTime(values[d.key].endTime)
            // const data = {
            //   key: d.key,
            //   startTime,
            //   endTime,
            // }
            // if (currentValue.find((item) => item.key === rowKey)) {
            //   const newValue = currentValue.map((item) => {
            //     return item.key === rowKey ? data : { ...item }
            //   })
            //   onFinish(newValue)
            //   return
            // }
            // onFinish([...currentValue, data])
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

      {/* <Row gutter={16}>
        <Col span={12}>
          <Button
            icon={<RedoOutlined />}
            style={{ width: '100%' }}
            type="primary"
            onClick={onWorkdaySync}
            disabled={!isWorkDay(currentDay.key)}
          >
            全工作日同步
          </Button>
        </Col>
        <Col span={12}>
          <Button
            icon={<ChromeOutlined />}
            style={{ width: '100%' }}
            type="primary"
            danger
            onClick={onWeekSync}
          >
            全周同步
          </Button>
        </Col>
      </Row> */}
    </Drawer>
  )
}

export default ConnectCard
