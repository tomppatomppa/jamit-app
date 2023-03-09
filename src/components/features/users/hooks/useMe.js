import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import CurrentUserContext from '../../../../contexts/CurrentUserContext'

const getME = async ({ token, credentialsProvider }) => {
  const response = await axios.get(credentialsProvider, {
    headers: `Authorization: Bearer ${token}`,
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
