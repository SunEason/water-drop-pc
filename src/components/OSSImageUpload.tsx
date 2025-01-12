import type { UploadFile, UploadProps } from 'antd'
import { Upload } from 'antd'
import { useGetOssInfoQuery } from '@/generated'
import ImgCrop from 'antd-img-crop'

interface OSSUploadProps {
  value?: UploadFile[]
  onChange?: (files: UploadFile[]) => void
  label?: string
  maxCount?: number
  imgCropAspect?: number
}

const OSSImageUpload = (
  { value, onChange, label, maxCount, imgCropAspect }: OSSUploadProps = {
    value: [],
    onChange: () => {},
    maxCount: 1,
    imgCropAspect: 1,
  },
) => {
  const { data, refetch } = useGetOssInfoQuery()
  // Mock get OSS api
  // https://help.aliyun.com/document_detail/31988.html
  const OSSData = data?.OSSInfo

  const getKey = (file: UploadFile) => {
    const suffix = file.name.slice(file.name.lastIndexOf('.'))
    const key = `${OSSData?.dir}${file.uid}${suffix}`
    const url = `${OSSData?.host}/${key}`
    return {
      key,
      url,
    }
  }

  const handleChange: UploadProps['onChange'] = ({ fileList }) => {
    const files = fileList.map((f) => {
      return {
        ...f,
        url: f.url || getKey(f).url,
      }
    })
    onChange?.(files)
  }

  const getExtraData: UploadProps['data'] = (file) => {
    return {
      key: getKey(file).key,
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
    fileList: value,
    maxCount: maxCount,
    action: OSSData?.host,
    onChange: handleChange,
    data: getExtraData,
    beforeUpload,
  }

  return (
    <ImgCrop rotationSlider aspect={imgCropAspect}>
      <Upload {...uploadProps} listType="picture-card">
        {label || '+ 上传图片'}
      </Upload>
    </ImgCrop>
  )
}

export default OSSImageUpload
