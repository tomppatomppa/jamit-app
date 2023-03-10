import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import { BASE_URL } from '../utils/constants'

const getPlaces = async (queryParams) => {
  const { data } = await axios.get(`${BASE_URL}/api/places`, {
    params: {
      ...queryParams,
    },
  })
  return data
}

const usePlaces = (queryParams) => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['allPlaces', queryParams],
    queryFn: () => getPlaces(queryParams),
    refetchOnMount: 'always',
    retry: 3,
  })

  return { places: data, isLoading, isError }
}

export default usePlaces
