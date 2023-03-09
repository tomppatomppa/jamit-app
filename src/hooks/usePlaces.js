import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const getPlaces = async ({ envelope }) => {
  const { data } = await axios.get(`${BASE_URL}/api/places`, {
    params: {
      envelope: envelope,
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
