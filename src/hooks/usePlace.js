import { useQuery } from '@tanstack/react-query'

import axios from 'axios'
import { baseUrl } from '../utils/config'

const getPlace = async (id) => {
  const { data } = await axios.get(`${baseUrl}/api/places/${id}`)
  return data
}

const usePlace = (id) => {
  const { isLoading, data } = useQuery({
    queryKey: ['place', id],
    queryFn: () => getPlace(id),
    enabled: !id ? false : true,
    retryOnMount: false,
  })

  return { place: data, isLoading }
}

export default usePlace
