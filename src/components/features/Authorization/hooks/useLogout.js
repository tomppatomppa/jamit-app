import { useQueryClient, useMutation } from '@tanstack/react-query'

import { useContext } from 'react'
import useAuthStorage from '../../../../hooks/useAuthStorage'
import CurrentUserContext from '../../../../contexts/CurrentUserContext'
import axios from 'axios'

import { showToast } from '../../../../utils/helpers'
import { BASE_URL } from '../../../../utils/constants'

const useLogout = () => {
  const queryClient = useQueryClient()
  const authStorage = useAuthStorage()
  const { currentUser, setCurrentUser } = useContext(CurrentUserContext)

  const mutatation = useMutation({
    mutationFn: (headers) =>
      axios.delete(`${BASE_URL}/api/login`, { ...headers }),
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
