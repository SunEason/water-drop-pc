import { Col, message, Row } from 'antd'
import styles from './index.module.less'
import {
  PageContainer,
  ProForm,
  ProFormInstance,
  ProFormText,
  ProFormTextArea,
} from '@ant-design/pro-components'
import OSSImageUpload from '@/components/OSSImageUpload'
import { useEffect, useRef } from 'react'
import { useUserContext } from '@/store/user'
import { useUpdateUserInfoMutation } from '@/generated'

function My() {
  const formRef = useRef<ProFormInstance>()

  const { store } = useUserContext()
  const [updateUserInfo] = useUpdateUserInfoMutation()

  useEffect(() => {
    if (!store.tel) return
    if (formRef.current) {
      formRef.current.setFieldsValue({
        tel: store.tel,
        name: store.name,
        desc: store.desc,
        avatar: {
          url: store.avatar,
        },
      })
    }
  }, [store])
  return (
    <PageContainer className={styles.container}>
      <ProForm
        formRef={formRef}
        submitter={{
          resetButtonProps: {
            style: {
              display: 'none',
            },
          },
        }}
        layout="horizontal"
        onFinish={async (values) => {
          const res = await updateUserInfo({
            variables: {
              id: store.id,
              input: {
                name: values.name,
                desc: values.desc,
              },
            },
          })
          if (res.data?.updateUserInfo) {
            message.success('提交成功')
            return
          }
          message.error('提交失败')
        }}
      >
        <Row gutter={20}>
          <Col>
            <ProFormText
              name="tel"
              label="手机号"
              tooltip="不能修改"
              disabled
            />
            <ProFormText name="name" label="姓名" placeholder="请输入姓名" />
            <ProFormTextArea
              name="desc"
              label="个人简介"
              placeholder="请输入个人简介"
            />
          </Col>
          <Col>
            <OSSImageUpload />
          </Col>
        </Row>
      </ProForm>
    </PageContainer>
  )
}

export default My
