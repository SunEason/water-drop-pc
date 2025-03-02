import { Button, Col, Drawer, Form, message, Row, Tabs } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import {
  getColumns,
  DAYS,
  IDay,
  IWeekCourse,
  IOrderTime,
  formatTime,
  getMaxKey,
  isWorkDay,
} from './contents'
import { EditableProTable } from '@ant-design/pro-components'
import { ChromeOutlined, RedoOutlined } from '@ant-design/icons'
import { useGetOrderTimeQuery, useSetOrderTimeMutation } from '@/generated'

interface IProps {
  id: string
  onClose: () => void
}

function OrderTime({ id, onClose }: IProps) {
  const [form] = Form.useForm()

  const [currentDay, setCurrentDay] = useState<IDay>(DAYS[0])
  const [reducibleTime, setReducibleTime] = useState<IWeekCourse[]>([])

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

  const onSubmit = async (input: IWeekCourse[]) => {
    const res = await submit({
      variables: {
        id: id,
        input: input,
      },
    })
    if (res.errors) {
      message.error(`保存失败`)
      return
    }
    message.success(`保存成功`)
    refetch()
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
    onSubmit(orderTime)
  }

  const onDelete = (key: number) => {
    const newValue = currentValue.filter((item) => item.key !== key)
    onFinish(newValue)
  }

  const onWorkdaySync = async () => {
    const newValue = DAYS.reduce((per: IWeekCourse[], cur) => {
      if (isWorkDay(cur.key)) {
        per.push({
          week: cur.key,
          orderTime: currentValue,
        })
      }
      return per
    }, [])

    onSubmit(newValue)
  }

  const onWeekSync = () => {
    const newValue = DAYS.reduce((per: IWeekCourse[], cur) => {
      per.push({
        week: cur.key,
        orderTime: currentValue,
      })
      return per
    }, [])

    onSubmit(newValue)
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
          record: () => {
            return {
              key: getMaxKey(currentValue) + 1,
              startTime: '12:00:00',
              endTime: '12:30:00',
            }
          },
        }}
        columns={getColumns({ onDelete: onDelete })}
      />
      <Row gutter={16}>
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
      </Row>
    </Drawer>
  )
}

export default OrderTime
