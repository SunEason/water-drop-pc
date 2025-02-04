import { useCommitCourseMutation, useGetCourseQuery } from '@/generated'
import {
  Button,
  Col,
  Drawer,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Spin,
} from 'antd'
import { useEffect, useMemo } from 'react'

interface IProps {
  id?: string
  onClose: () => void
  onSuccess: () => void
}

function EditCourse({ id, onClose, onSuccess }: IProps) {
  const title = useMemo(() => {
    return id ? '编辑' : '新增'
  }, [id])

  const [form] = Form.useForm()

  const { data, loading: querying } = useGetCourseQuery({
    fetchPolicy: 'no-cache', // 禁用缓存
    variables: {
      id: id || '',
    },
  })
  useEffect(() => {
    const course = data?.getCourse
    if (!course) {
      form.setFieldsValue({})
      return
    }
    form.setFieldsValue(course)
  }, [data])

  const [submit, { loading: submitting }] = useCommitCourseMutation({
    fetchPolicy: 'no-cache', // 禁用缓存
  })

  const onFinish = async () => {
    const values = await form.validateFields()
    if (!values) return
    const res = await submit({
      variables: {
        id: id ? id : undefined,
        input: {
          ...values,
        },
      },
    })
    if (res.errors) {
      message.error(`${title}失败`)
      console.error(res.errors)
      return
    }
    message.success(`${title}成功`)
    onClose()
    onSuccess()
  }

  return (
    <Drawer
      title={`${title}课程`}
      onClose={onClose}
      open
      width={720}
      styles={{
        footer: {
          textAlign: 'right',
        },
      }}
      footer={
        <Button type="primary" onClick={onFinish} loading={submitting}>
          保存
        </Button>
      }
    >
      <Spin spinning={querying}>
        <Form form={form}>
          <Form.Item
            label="课程名称"
            name="name"
            rules={[{ required: true, message: '请输入课程名称' }]}
          >
            <Input placeholder="请输入课程名称" />
          </Form.Item>
          <Form.Item label="课程描述" name="desc">
            <Input.TextArea
              placeholder="请输入课程描述"
              rows={5}
              showCount
              maxLength={200}
            />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label="限制人数"
                name="limitNumber"
                rules={[{ required: true, message: '请输入限制人数' }]}
              >
                <InputNumber
                  placeholder="请输入限制人数"
                  min={0}
                  addonAfter="人"
                />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label="持续时长"
                name="duration"
                rules={[{ required: true, message: '请输入持续时长' }]}
              >
                <InputNumber
                  placeholder="请输入持续时长"
                  min={0}
                  addonAfter="分钟"
                />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label="适龄人群"
            name="group"
            rules={[{ required: true, message: '请输入适龄人群' }]}
          >
            <Input placeholder="请输入适龄人群" />
          </Form.Item>
          <Form.Item
            label="基础能力"
            name="baseAbility"
            rules={[{ required: true, message: '请输入基础能力' }]}
          >
            <Input placeholder="请输入基础能力" />
          </Form.Item>
          <Form.Item label="预约信息" name="reserveInfo">
            <Input.TextArea
              placeholder="请输入预约信息"
              rows={5}
              showCount
              maxLength={200}
            />
          </Form.Item>
          <Form.Item label="退款信息" name="refundInfo">
            <Input.TextArea
              placeholder="请输入退款信息"
              rows={5}
              showCount
              maxLength={200}
            />
          </Form.Item>
          <Form.Item label="其他信息" name="otherInfo">
            <Input.TextArea
              placeholder="请输入其他信息"
              rows={5}
              showCount
              maxLength={200}
            />
          </Form.Item>
        </Form>
      </Spin>
    </Drawer>
  )
}

export default EditCourse
