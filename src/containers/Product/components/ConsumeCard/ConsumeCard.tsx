import {
  CardType,
  useGetProductCardsQuery,
  useSetProductCardsMutation,
} from '@/generated'
import { message, Modal, Result, Row, Space, Typography } from 'antd'
import { useEffect, useMemo, useState } from 'react'
import { CheckCard } from '@ant-design/pro-components'
// import CourseSearch from '@/components/CourseSearch'
// import { getCardName } from '@/utils/constants'
import _ from 'lodash'
import { CreditCardOutlined } from '@ant-design/icons'
import style from './index.module.less'

interface IProps {
  id: string
  onClose: (isReload?: boolean) => void
}

function getCardType(type: CardType) {
  switch (type) {
    case CardType.Time:
      return '次卡'
    case CardType.Duration:
      return '时长卡'
    default:
      return '未知'
  }
}

/**
 * 消费卡
 */
const ConsumeCard = ({ onClose, id }: IProps) => {
  const [selectedCards, setSelectedCards] = useState<string[]>([])

  const { data, loading: querying } = useGetProductCardsQuery({
    variables: {
      id,
    },
  })

  const [setCards] = useSetProductCardsMutation()

  // const { getCards, data: cards, loading: getCardsLoading } = useLazyCards()
  // const [edit, editLoading] = useEditProductInfo()

  const cards = useMemo(
    () => _.unionBy(data?.product?.cards || [], [], 'id'),
    [data],
  )

  useEffect(() => {
    setSelectedCards(data?.product?.cards?.map((item) => item.id) || [])
  }, [data])

  const onOkHandler = () => {
    setCards({
      variables: {
        id,
        cards: selectedCards,
      },
      onCompleted() {
        message.success('绑定成功')
        onClose(true)
      },
      onError(e) {
        message.error('绑定失败')
        console.error(e)
      },
    })
  }

  // const onSelectedHandler = (courseId: string) => {
  //   getCards(courseId)
  // }

  return (
    <Modal
      title="绑定消费卡"
      width="900"
      open
      onOk={onOkHandler}
      onCancel={() => onClose()}
    >
      {/* <Row justify="end">
        <CourseSearch onSelected={onSelectedHandler} />
      </Row> */}
      <Row justify="center" className={style.content}>
        {cards.length === 0 && (
          <Result status="warning" title="请搜索课程并选择对应的消费卡" />
        )}
        <CheckCard.Group
          multiple
          loading={querying}
          onChange={(value) => {
            setSelectedCards(value as string[])
          }}
          value={selectedCards}
        >
          {cards.map((item) => (
            <CheckCard
              key={item.id}
              value={item.id}
              size="small"
              avatar={<CreditCardOutlined />}
              title={
                <>
                  <Space>
                    <Typography.Text ellipsis className={style.name}>
                      {item.course?.name}
                      course name
                    </Typography.Text>
                    {getCardType(item.type)}
                  </Space>
                  <div>{item.name}</div>
                </>
              }
              description={
                <Space>
                  <span>
                    次数：
                    {item.times}
                  </span>
                  <span>
                    有效期：
                    {item.duration}
                  </span>
                </Space>
              }
            />
          ))}
        </CheckCard.Group>
      </Row>
    </Modal>
  )
}

export default ConsumeCard
