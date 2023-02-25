import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import { baseUrl } from '../utils/config'

const getEvents = async (filter) => {
  const response = await axios.get(`${baseUrl}/api/events`, {
    params: filter,
  })
  return response.data
}

const useEvents = (filter) => {
  const { isLoading, data } = useQuery({
    queryKey: ['allEvents', filter],
    queryFn: () => getEvents(filter),
  })

  return { data, isLoading }
}

export default useEvents
