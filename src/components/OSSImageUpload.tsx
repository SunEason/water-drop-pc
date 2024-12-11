import type { UploadFile, UploadProps } from 'antd'
import { Upload } from 'antd'
import { useGetOssInfoQuery } from '@/generated'
import { useRef } from 'react'
import ImgCrop from 'antd-img-crop'

interface OSSUploadProps {
  value?: UploadFile | null
  onChange?: (file?: UploadFile) => void
}

const OSSImageUpload = (
  { value, onChange }: OSSUploadProps = {
    value: null,
    onChange: () => {},
  },
) => {
  const key = useRef('')
  const { data, refetch } = useGetOssInfoQuery()
  // Mock get OSS api
  // https://help.aliyun.com/document_detail/31988.html
  const OSSData = data?.OSSInfo

  const handleChange: UploadProps['onChange'] = ({ file }) => {
    if (file.status === 'removed') {
      onChange?.()
      return
    }
    const newFile = {
      ...file,
      url: `${OSSData?.host}/${key.current}`,
    }
    onChange?.(newFile)
  }

  const getExtraData: UploadProps['data'] = (file) => {
    const suffix = file.name.slice(file.name.lastIndexOf('.'))
    const filename = Date.now() + suffix
    key.current = `${OSSData?.dir}/${filename}`
    return {
      key: key.current,
      OSSAccessKeyId: OSSData?.accessId,
      policy: OSSData?.policy,
      Signature: OSSData?.signature,
    }
  }

  const beforeUpload: UploadProps['beforeUpload'] = async (file) => {
    if (!OSSData) return false

    const expire = Number(OSSData.expire) * 1000

    if (expire < Date.now()) {
      await refetch()
    }

    return file
  }

  const uploadProps: UploadProps = {
    name: 'file',
    fileList: value ? [value] : [],
    action: OSSData?.host,
    onChange: handleChange,
    data: getExtraData,
    beforeUpload,
  }

  return (
    <ImgCrop rotationSlider>
      <Upload {...uploadProps} listType="picture-card">
        + 替换头像
      </Upload>
    </ImgCrop>
  )
}

export default OSSImageUpload
