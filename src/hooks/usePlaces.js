import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import { baseUrl } from '../utils/config'
import { getDate } from '../utils/helpers'

const getPlaces = async ({ envelope, before }) => {
  const { data } = await axios.get(`${baseUrl}/api/places`, {
    params: {
      envelope: envelope,
      before: getDate(before),
    },
  })
  return data
}

const usePlaces = (queryParams) => {
  const { isLoading, data } = useQuery({
    queryKey: ['allPlaces', queryParams],
    queryFn: () => getPlaces(queryParams),
    refetchOnMount: 'always',
    retry: 3,
  })

  return { places: data, isLoading }
}

export default usePlaces
