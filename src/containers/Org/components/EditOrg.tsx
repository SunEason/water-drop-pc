import {
  Button,
  Col,
  Divider,
  Drawer,
  Form,
  Input,
  message,
  Row,
  Spin,
  UploadFile,
} from 'antd'
import styles from './index.module.less'
import UploadImage from '@/components/OSSImageUpload'
import { Select } from 'antd/lib'
import {
  useCreateOrganizationMutation,
  useGetOrganizationQuery,
  useUpdateOrganizationMutation,
} from '@/generated'

interface IProps {
  id: string
  onClose: () => void
}

function EditOrg({ id, onClose }: IProps) {
  const [form] = Form.useForm()

  const [edit, { loading: editLoading }] = useUpdateOrganizationMutation()
  const [create, { loading: createLoading }] = useCreateOrganizationMutation()

  const { data, loading: queryLoading } = useGetOrganizationQuery({
    fetchPolicy: 'no-cache', // 禁用缓存
    variables: {
      id,
    },
  })

  if (queryLoading) return <Spin />

  const init = () => {
    const org = data?.getOrganization
    if (!data) return {}
    return {
      ...org,
      tags: org?.tags?.split(','),
      logo: [{ url: org?.logo }],
      businessLicense: [{ url: org?.businessLicense }],
      identityCardFrontImg: [{ url: org?.identityCardFrontImg }],
      identityCardBackImg: [{ url: org?.identityCardBackImg }],
      frontImages: org?.frontImages || [],
      roomImages: org?.roomImages || [],
      otherImages: org?.otherImages || [],
    }
  }
  const initValue = init()

  const onFinish = async () => {
    const values = await form.validateFields()
    if (!values) return
    let submit
    if (id) {
      submit = edit
    } else {
      submit = create
    }
    const res = await submit({
      variables: {
        id: id,
        input: {
          ...values,
          tags: values.tags?.join(','),
          logo: values.logo?.[0]?.url,
          businessLicense: values.businessLicense?.[0]?.url,
          identityCardFrontImg: values.identityCardFrontImg?.[0]?.url,
          identityCardBackImg: values.identityCardBackImg?.[0]?.url,
          frontImages: values.frontImages?.map((item: UploadFile) => ({
            url: item.url,
          })),
          roomImages: values.roomImages?.map((item: UploadFile) => ({
            url: item.url,
          })),
          otherImages: values.otherImages?.map((item: UploadFile) => ({
            url: item.url,
          })),
        },
      },
    })
    if (res.errors) return message.error('编辑失败')
    message.success('编辑成功')
  }

  return (
    <Drawer
      title={id ? '编辑门店' : '新增门店'}
      width="70vw"
      onClose={onClose}
      open
      styles={{
        footer: {
          textAlign: 'right',
        },
      }}
      footer={
        <Button
          type="primary"
          onClick={onFinish}
          loading={editLoading || createLoading}
        >
          保存
        </Button>
      }
    >
      <Form form={form} initialValues={initValue} layout="vertical">
        <Row className={styles.row} gutter={20}>
          <Col span={10}>
            <Form.Item
              style={{ width: '100%' }}
              label="logo"
              name="logo"
              rules={[{ required: true, message: '请上传logo' }]}
            >
              <UploadImage maxCount={1} label="替换logo" />
            </Form.Item>
          </Col>
          <Col span={14}>
            <Form.Item
              style={{ width: '100%' }}
              label="名称"
              name="name"
              rules={[{ required: true, message: '请输入名称' }]}
            >
              <Input placeholder="请输入名称" />
            </Form.Item>
          </Col>
        </Row>
        <Row className={styles.row} gutter={20}>
          <Col span={11}>
            <Form.Item label="标签" name="tags">
              <Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="请选择标签"
              ></Select>
            </Form.Item>
          </Col>
          <Col span={5}>
            <Form.Item
              label="手机号"
              name="tel"
              rules={[{ required: true, message: '请输入手机号' }]}
            >
              <Input placeholder="请输入手机号" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="经度" name="longitude">
              <Input placeholder="请输入经度" />
            </Form.Item>
          </Col>
          <Col span={4}>
            <Form.Item label="纬度" name="latitude">
              <Input placeholder="请输入纬度" />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item
          label="地址"
          name="address"
          rules={[{ required: true, message: '请输入地址' }]}
        >
          <Input placeholder="请输入地址" />
        </Form.Item>
        <Form.Item label="门店简介" name="description">
          <Input.TextArea
            className={styles.textArea}
            maxLength={500}
            rows={5}
            placeholder="请输入门店简介"
            allowClear
            showCount
          />
        </Form.Item>
        <Row className={styles.row} gutter={20}>
          <Col span={8}>
            <Form.Item
              style={{ width: '100%' }}
              label="营业执照"
              name="businessLicense"
              rules={[{ required: true, message: '请上传营业执照' }]}
            >
              <UploadImage
                maxCount={1}
                imgCropAspect={3 / 2}
                label="替换营业执照"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              style={{ width: '100%' }}
              label="身份证正面"
              name="identityCardFrontImg"
              rules={[{ required: true, message: '请上传身份证正面' }]}
            >
              <UploadImage
                maxCount={1}
                imgCropAspect={3 / 2}
                label="替换身份证正面"
              />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item
              style={{ width: '100%' }}
              label="身份证反面"
              name="identityCardBackImg"
              rules={[{ required: true, message: '请上传身份证反面' }]}
            >
              <UploadImage
                maxCount={1}
                imgCropAspect={3 / 2}
                label="替换身份证反面"
              />
            </Form.Item>
          </Col>
        </Row>

        <Divider>门店顶部图：图片长宽要求比例2:1，最多上传5张</Divider>
        <Form.Item name="frontImages">
          <UploadImage maxCount={5} imgCropAspect={2 / 1} />
        </Form.Item>
        <Divider>门店室内图：图片长宽要求比例2:1，最多上传5张</Divider>
        <Form.Item name="roomImages">
          <UploadImage maxCount={5} imgCropAspect={2 / 1} />
        </Form.Item>
        <Divider>门店其他图：图片长宽要求比例2:1，最多上传5张</Divider>
        <Form.Item name="otherImages">
          <UploadImage
            maxCount={5}
            onChange={(files) => console.log(files)}
            imgCropAspect={2 / 1}
          />
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default EditOrg
