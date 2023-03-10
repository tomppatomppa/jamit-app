import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import CurrentUserContext from '../../../../contexts/CurrentUserContext'
import { BASE_URL } from '../../../../utils/constants'

const getME = async (currentUser) => {
  const response = await axios.get(`${BASE_URL}/api/me`, {
    headers: `Authorization: Bearer ${currentUser.token}`,
  })
  return response.data
}
const useMe = () => {
  const { currentUser } = useContext(CurrentUserContext)

  const { data, isLoading, isError } = useQuery({
    queryKey: ['ME'],
    queryFn: () => getME(currentUser),
  })
  return { data, isLoading, isError }
}

export default useMe
