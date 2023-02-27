import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import { baseUrl } from '../utils/config'
import { getDate } from '../utils/helpers'

const getEvents = async (filter) => {
  const response = await axios.get(`${baseUrl}/api/events`, {
    params: filter,
  })
  return response.data
}

const useEvents = (filter, selectedDate) => {
  const filterByDate = getDate(selectedDate)

  const { isLoading, data } = useQuery({
    queryKey: ['allEvents', filter, filterByDate],
    queryFn: () => getEvents({ ...filter, filterByDate }),
    retry: 3,
  })

  return { data, isLoading }
}

export default useEvents
