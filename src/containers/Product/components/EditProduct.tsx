import {
  Button,
  Col,
  Divider,
  Drawer,
  Form,
  Input,
  InputNumber,
  message,
  Row,
  Space,
  Spin,
} from 'antd'
import UploadImage from '@/components/OSSImageUpload'
import { useEffect, useMemo, useState } from 'react'
import { useCommitProductMutation, useProductQuery } from '@/generated'
import TypeSelect from '@/components/TypeSelect'

const { TextArea } = Input

interface IProps {
  id?: string
  onClose: (isReload?: boolean) => void
  onSuccess: () => void
}

/**
 * 创建/编辑商品
 */
const EditCourse = ({ onClose, id, onSuccess }: IProps) => {
  const title = useMemo(() => {
    return id ? '编辑' : '新增'
  }, [id])
  const [form] = Form.useForm()
  const [open, setOpen] = useState(true)

  const [submit, { loading: submitting }] = useCommitProductMutation({
    fetchPolicy: 'no-cache', // 禁用缓存
  })
  const { data, loading: querying } = useProductQuery({
    fetchPolicy: 'no-cache', // 禁用缓存
    variables: {
      id: id || '',
    },
  })
  useEffect(() => {
    const product = data?.product
    if (!product) {
      form.setFieldsValue({})
      return
    }
    form.setFieldsValue({
      ...product,
      coverUrl: product.coverUrl ? [{ url: product.coverUrl }] : [],
      bannerUrl: product.bannerUrl ? [{ url: product.bannerUrl }] : [],
    })
  }, [data])

  const onSubmitHandler = async () => {
    const values = await form.validateFields()
    if (values) {
      const newValues = {
        ...values,
        coverUrl: values?.coverUrl?.[0]?.url,
        bannerUrl: values?.bannerUrl?.[0]?.url,
      }
      submit({
        variables: {
          commitId: id ? id : undefined,
          input: {
            ...newValues,
          },
        },
        onCompleted: () => {
          message.success(`${title}成功`)
          onClose()
          onSuccess()
        },
        onError: (e) => {
          message.error(`${title}失败`)
          console.error(e)
          return
        },
      })
    }
  }

  return (
    <Drawer
      title={id ? '编辑商品' : '新建商品'}
      width={900}
      open={open}
      onClose={() => setOpen(false)}
      afterOpenChange={(o) => !o && onClose()}
      extra={
        <Space>
          <Button onClick={() => onClose()}>取消</Button>
          <Button loading={submitting} onClick={onSubmitHandler} type="primary">
            提交
          </Button>
        </Space>
      }
    >
      <Spin spinning={querying}>
        {(data || !id) && (
          <Form form={form}>
            <Row gutter={20}>
              <Col span={18}>
                <Form.Item
                  style={{ width: '100%' }}
                  label="名称"
                  name="name"
                  rules={[{ required: true }]}
                >
                  <Input />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item label="商品分类" name="type">
                  <TypeSelect />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={6}>
                <Form.Item
                  label="库存总额"
                  name="stock"
                  rules={[{ required: true }]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="原价"
                  name="originalPrice"
                  rules={[{ required: true }]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="优惠价"
                  name="preferentialPrice"
                  rules={[{ required: true }]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
              <Col span={6}>
                <Form.Item
                  label="每人限购数量"
                  name="limitBuyNumber"
                  rules={[{ required: true }]}
                >
                  <InputNumber />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item
              label="商品简介"
              name="desc"
              rules={[{ required: true }]}
            >
              <TextArea maxLength={200} rows={5} allowClear showCount />
            </Form.Item>
            <Divider>图片设置</Divider>
            <Row gutter={20}>
              <Col span={12}>
                <Form.Item
                  name="coverUrl"
                  label="商品封面图：图片长宽要求比例为 16:9 "
                  labelCol={{
                    span: 24,
                  }}
                >
                  <UploadImage maxCount={1} imgCropAspect={16 / 9} />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="bannerUrl"
                  label="商品 Banner 横图：图片长宽要求比例为 16:9 "
                  labelCol={{
                    span: 24,
                  }}
                >
                  <UploadImage maxCount={1} imgCropAspect={16 / 9} />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        )}
      </Spin>
    </Drawer>
  )
}

export default EditCourse
