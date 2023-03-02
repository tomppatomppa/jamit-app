import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import CurrentUserContext from '../../../../contexts/CurrentUserContext'

import { baseUrl } from '../../../../utils/config'

const getME = async (token) => {
  const response = await axios.get(`${baseUrl}/api/me`, {
    headers: `Authorization: Bearer ${token}`,
  })
  return response.data
}
const useMe = () => {
  const { currentUser } = useContext(CurrentUserContext)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['ME'],
    queryFn: () => getME(currentUser?.token),
  })
  return { data, isLoading, isError }
}

export default useMe
