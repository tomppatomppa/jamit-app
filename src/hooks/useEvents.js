import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import { baseUrl } from '../utils/config'
import { getDate } from '../utils/helpers'

const getEvents = async (filter) => {
  const response = await axios.get(`${baseUrl}/api/events`, {
    params: {
      ...filter,
      before: getDate(filter.before), //TODO: find a better way to do this
    },
  })
  return response.data
}

const useEvents = (filter) => {
  const { isLoading, data } = useQuery({
    queryKey: ['allEvents', filter],
    queryFn: () => getEvents(filter),
    refetchOnMount: 'always',
    retry: 3,
  })

  return { data, isLoading }
}

export default useEvents
