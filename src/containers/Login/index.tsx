import { LockOutlined, MobileOutlined } from '@ant-design/icons'
import {
  LoginFormPage,
  ProFormCaptcha,
  ProFormCheckbox,
  ProFormText,
} from '@ant-design/pro-components'
import styles from './index.module.less'
import logo from '../../assets/logo.png'
import { useLoginMutation, useSendMessageMutation } from '../../generated'
import { message } from 'antd'

interface IValues {
  tel: string
  code: string
}

export default function Page() {
  const [sendMessage] = useSendMessageMutation()
  const [login] = useLoginMutation()

  async function onFinish(values: IValues) {
    const res = await login({
      variables: {
        tel: values.tel,
        code: values.code,
      },
    })
    if (!res.data?.login) return message.error('登录失败')
  }
  return (
    <div className={styles.container}>
      <LoginFormPage logo={logo} onFinish={onFinish}>
        {/* <Tabs
          centered
          activeKey={loginType}
          onChange={(activeKey) => setLoginType(activeKey as LoginType)}
        >
          <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
          <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
        </Tabs> */}
        <>
          <ProFormText
            fieldProps={{
              size: 'large',
              prefix: <MobileOutlined className={'prefixIcon'} />,
            }}
            name="tel"
            placeholder={'手机号'}
            rules={[
              {
                required: true,
                message: '请输入手机号！',
              },
              {
                pattern: /^1\d{10}$/,
                message: '手机号格式错误！',
              },
            ]}
          />
          <ProFormCaptcha
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className={'prefixIcon'} />,
            }}
            captchaProps={{
              size: 'large',
            }}
            phoneName="tel"
            placeholder={'请输入验证码'}
            captchaTextRender={(timing, count) => {
              if (timing) {
                return `${count} ${'获取验证码'}`
              }
              return '获取验证码'
            }}
            name="code"
            rules={[
              {
                required: true,
                message: '请输入验证码！',
              },
            ]}
            onGetCaptcha={async (phone) => {
              const res = await sendMessage({
                variables: {
                  tel: phone,
                },
              })
              if (res.data?.sendMessage) {
                message.success('验证码发送成功！')
              } else {
                message.error('验证码发送失败！')
              }
            }}
          />
        </>
        <div
          style={{
            marginBlockEnd: 24,
          }}
        >
          <ProFormCheckbox noStyle name="autoLogin">
            自动登录
          </ProFormCheckbox>
          <a
            style={{
              float: 'right',
            }}
          >
            忘记密码
          </a>
        </div>
      </LoginFormPage>
    </div>
  )
}
