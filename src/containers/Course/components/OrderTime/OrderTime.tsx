import { Button, Col, Drawer, Row, Tabs } from 'antd'
import { useState } from 'react'
import { getColumns, DAYS, IDay } from './contents'
import { EditableProTable } from '@ant-design/pro-components'
import { ChromeOutlined, RedoOutlined } from '@ant-design/icons'

interface IProps {
  id?: string
  onClose: () => void
}

function OrderTime({ id, onClose }: IProps) {
  const [currentDay, setCurrentDay] = useState<IDay>(DAYS[0])

  const onTabsChange = (key: string) => {
    const current = DAYS.find((item) => item.key === key)
    if (!current) return
    setCurrentDay(current)
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
      <EditableProTable
        rowKey="key"
        loading={false}
        editable={{
          actionRender: (_row, _config, defaultDoms) => {
            return [defaultDoms.delete, defaultDoms.save, defaultDoms.cancel]
          },
        }}
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
      {currentDay.key}
      {id}
    </Drawer>
  )
}

export default OrderTime
