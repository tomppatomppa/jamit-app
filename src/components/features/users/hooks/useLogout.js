import { QueryClient, useMutation } from '@tanstack/react-query'

import { useContext } from 'react'
import useAuthStorage from '../../../../hooks/useAuthStorage'
import CurrentUserContext from '../../../../contexts/CurrentUserContext'
import axios from 'axios'
import { baseUrl } from '../../../../utils/config'

import { showToast } from '../../../../utils/helpers'

const useLogout = () => {
  const queryClient = new QueryClient()
  const authStorage = useAuthStorage()
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  const mutatation = useMutation({
    mutationFn: (headers) =>
      axios.delete(`${baseUrl}/api/login`, { ...headers }),
    onSettled: async () => {
      await authStorage.removeCurrentUser()
      queryClient.clear()
      showToast({
        type: 'success',
        text1: `Logged out ${currentUser.username}`,
      })
      setCurrentUser(null)
    },
  })
  const logout = () => {
    const headers = {
      headers: `Authorization: Bearer ${currentUser?.token}`,
    }
    mutatation.mutate(headers)
  }
  return logout
}

export default useLogout
