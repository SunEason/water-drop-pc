import { Button, Col, Drawer, Form, message, Row, Tabs } from 'antd'
// import { useEffect, useMemo, useState } from 'react'
// import { EditableProTable } from '@ant-design/pro-components'
// import { ChromeOutlined, RedoOutlined } from '@ant-design/icons'
// import { useGetOrderTimeQuery, useSetOrderTimeMutation } from '@/generated'

interface IProps {
  id: string
  onClose: () => void
}

function ConnectCard({ id, onClose }: IProps) {
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
      // footer={
      //   <Button type="primary" onClick={onFinish} loading={submitting}>
      //     保存
      //   </Button>
      // }
    >
      {id}
      {/* <EditableProTable
        rowKey="id"
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
      /> */
      /*
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
      </Row> */}
    </Drawer>
  )
}

export default ConnectCard
