import { useInfiniteQuery } from '@tanstack/react-query'

import axios from 'axios'

import { baseUrl } from '../utils/config'

const getEvent = async ({ queryKey, pageParam = 0 }) => {
  const [, id] = queryKey

  const response = await axios.get(
    `${baseUrl}/api/events?place_id=${id}&offset=${pageParam}`
  )
  return response.data
}

const useEvent = (id) => {
  const { isLoading, data, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery(['allEvents', id], getEvent, {
      getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
      enabled: !id ? false : true,
    })

  return { data, isLoading, fetchNextPage, isFetchingNextPage }
}

export default useEvent
