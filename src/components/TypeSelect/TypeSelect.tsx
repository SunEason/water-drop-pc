import { ProductType, useProductTypesQuery } from '@/generated'
import { Select } from 'antd'
import { useEffect, useState } from 'react'

interface IProps {
  value?: string
  onChange?: (val: string) => void
}

/**
 *  商品分类选择器
 */
const TypeSelect = ({ value, onChange }: IProps) => {
  const [types, setTypes] = useState<ProductType[]>([])
  const { data } = useProductTypesQuery()

  useEffect(() => {
    if (data) {
      setTypes(data.productTypes || [])
    }
  }, [data])

  const onChangeHandler = (val: string) => {
    onChange?.(val)
  }

  return (
    <Select placeholder="请选择分类" value={value} onChange={onChangeHandler}>
      {types?.map((item) => (
        <Select.Option key={item.key} value={item.key}>
          {item.title}
        </Select.Option>
      ))}
    </Select>
  )
}

TypeSelect.defaultProps = {
  value: undefined,
  onChange: () => {},
}

export default TypeSelect
