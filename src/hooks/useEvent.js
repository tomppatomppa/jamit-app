import { useInfiniteQuery } from '@tanstack/react-query'

import axios from 'axios'

import { baseUrl } from '../utils/config'

const getEvent = async ({ queryKey, pageParam = 0 }) => {
  // eslint-disable-next-line no-unused-vars
  const [_, id] = queryKey

  const response = await axios.get(
    `${baseUrl}/api/events?place_id=${id}&offset=${pageParam}`
  )
  return response.data
}

const useEvent = (id) => {
  const { isLoading, data, fetchNextPage } = useInfiniteQuery(
    ['allEvents', id],
    getEvent,
    {
      getNextPageParam: (lastPage) => lastPage.nextCursor || undefined,
      enabled: !id ? false : true,
    }
  )

  return { data, isLoading, fetchNextPage }
}

export default useEvent
