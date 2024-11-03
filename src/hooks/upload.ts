import { useGetOssInfoQuery } from '../generated'

export function useUpload() {
  const { data } = useGetOssInfoQuery()

  const uploadHandler = async (file: File) => {
    if (!data?.OSSInfo) {
      return { url: '' }
    }
    const formData = new FormData()
    const key = `images/${file.name}`
    formData.append('key', key)
    formData.append('policy', data.OSSInfo.policy)
    formData.append('OSSAccessKeyId', data.OSSInfo.accessId)
    formData.append('success_action_status', '200')
    formData.append('signature', data.OSSInfo.signature)
    formData.append('file', file)

    const res = await fetch(data.OSSInfo.host, {
      method: 'POST',
      body: formData,
      // headers: new Headers({
      //   'Content-Type': file.type,
      // }),
    })
    console.log(res)
    return {
      url: res.url + key,
    }
  }

  return {
    uploadHandler,
  }
}
