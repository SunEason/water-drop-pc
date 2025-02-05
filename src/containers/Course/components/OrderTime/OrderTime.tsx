import { Button, Col, Drawer, Form, message, Row, Tabs } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import {
  getColumns,
  DAYS,
  IDay,
  IWeekCourse,
  IOrderTime,
  formatTime,
} from './contents'
import { EditableProTable } from '@ant-design/pro-components'
import { ChromeOutlined, RedoOutlined } from '@ant-design/icons'
import { useGetOrderTimeQuery, useSetOrderTimeMutation } from '@/generated'

interface IProps {
  id: string
  onClose: () => void
}

function OrderTime({ id, onClose }: IProps) {
  const [currentDay, setCurrentDay] = useState<IDay>(DAYS[0])
  const [reducibleTime, setReducibleTime] = useState<IWeekCourse[]>([])
  const [form] = Form.useForm()

  const {
    data,
    loading: querying,
    refetch,
  } = useGetOrderTimeQuery({
    variables: {
      id: id,
    },
  })

  const [submit] = useSetOrderTimeMutation()

  useEffect(() => {
    setReducibleTime(data?.getOrderTime || [])
  }, [data])

  const currentValue = useMemo(() => {
    return (
      reducibleTime.find((item) => item.week === currentDay.key)?.orderTime ||
      []
    )
  }, [reducibleTime, currentDay])

  const onTabsChange = (key: string) => {
    const current = DAYS.find((item) => item.key === key)
    if (!current) return
    setCurrentDay(current)
  }

  const onFinish = async (newValue: IOrderTime[]) => {
    let orderTime = [...reducibleTime]
    if (reducibleTime.find((item) => item.week === currentDay.key)) {
      orderTime = orderTime.map((item) => {
        if (item.week !== currentDay.key) return item
        return {
          ...item,
          orderTime: newValue,
        }
      })
    } else {
      orderTime.push({
        week: currentDay.key,
        orderTime: newValue,
      })
    }
    const res = await submit({
      variables: {
        id: id,
        input: orderTime,
      },
    })
    if (res.errors) {
      message.error(`保存失败`)
      return
    }
    message.success(`保存成功`)
    refetch()
  }

  return (
    <Drawer
      title="可预约时间"
      onClose={onClose}
      open
      width={720}
      styles={{
        footer: {
          textAlign: 'right',
        },
      }}
      // footer={
      //   <Button type="primary" onClick={onFinish} loading={submitting}>
      //     保存
      //   </Button>
      // }
    >
      <Tabs items={DAYS} type="card" onChange={onTabsChange}></Tabs>
      <EditableProTable<IOrderTime>
        rowKey="key"
        loading={querying}
        editable={{
          form: form,
          actionRender: (_row, _config, defaultDoms) => {
            return [defaultDoms.save, defaultDoms.cancel]
          },
          // onValuesChange(record, dataSource) {
          //   console.log(record, dataSource)
          // },
          onSave: async (rowKey, d) => {
            const values = await form.validateFields()
            const startTime = formatTime(values[d.key].startTime)
            const endTime = formatTime(values[d.key].endTime)
            const data = {
              key: d.key,
              startTime,
              endTime,
            }
            if (currentValue.find((item) => item.key === rowKey)) {
              const newValue = currentValue.map((item) => {
                return item.key === rowKey ? data : { ...item }
              })
              onFinish(newValue)
              return
            }
            onFinish([...currentValue, data])
          },
        }}
        value={currentValue}
        recordCreatorProps={{
          record: (index: number) => {
            return {
              key: index + 1,
              startTime: '12:00:00',
              endTime: '12:30:00',
            }
          },
        }}
        columns={getColumns({ onDelete: (key) => alert(key) })}
      />
      <Row gutter={16}>
        <Col span={12}>
          <Button
            icon={<RedoOutlined />}
            style={{ width: '100%' }}
            type="primary"
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
          >
            全周同步
          </Button>
        </Col>
      </Row>
    </Drawer>
  )
}

export default OrderTime
