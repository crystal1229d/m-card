import { useCallback } from 'react'
import { useInfiniteQuery } from 'react-query'
import { getCards } from '@/remote/card'
import { flatten } from 'lodash'
import ListRow from '@shared/ListRow'
import InfiniteScroll from 'react-infinite-scroll-component'
import Badge from '@shared/Badge'
import { useNavigate } from 'react-router-dom'

function CardList() {
  const navigate = useNavigate()

  const {
    data,
    hasNextPage = false,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery(
    ['cards'],
    ({ pageParam }) => {
      return getCards(pageParam) // 이전에 호출했던 마지막 cursor 를 getCards 에 넘겨준다
    },
    {
      getNextPageParam: (snapshot) => {
        return snapshot.lastVisible
      },
    },
  )

  const loadMore = useCallback(() => {
    // fetch 중이거나 다음 페이지가 없는 경우 아무 일도 하지 않는다
    if (hasNextPage === false || isFetching) return
    fetchNextPage()
  }, [fetchNextPage, hasNextPage, isFetching])

  if (data === null) {
    return null
  }

  const cards = flatten(data?.pages.map(({ items }) => items))

  return (
    <div>
      <InfiniteScroll
        dataLength={cards.length}
        hasMore={hasNextPage}
        loader={<></>}
        next={loadMore}
        scrollThreshold="100px"
      >
        <ul>
          {cards.map((card, index) => {
            return (
              <ListRow
                key={card.id}
                contents={
                  <ListRow.Texts
                    title={`${index + 1}위`}
                    subTitle={card.name}
                  />
                }
                right={
                  card.payback != null ? <Badge label={card.payback} /> : null
                }
                withArrow={true}
                onClick={() => {
                  navigate(`/card/${card.id}`)
                }}
              />
            )
          })}
        </ul>
      </InfiniteScroll>
    </div>
  )
}

export default CardList
