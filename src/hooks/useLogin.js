import { useMutation } from '@tanstack/react-query'

import { loginUser } from '../services/users'

import { QueryClient } from '@tanstack/react-query'

import { useContext } from 'react'
import useAuthStorage from './useAuthStorage'
import CurrentUserContext from '../contexts/CurrentUserContext'

const useLogin = () => {
  const queryClient = new QueryClient()
  const authStorage = useAuthStorage()
  const { setCurrentUser } = useContext(CurrentUserContext)

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async (usernameAndToken) => {
      await authStorage.setCurrentUser(usernameAndToken)
      setCurrentUser({ ...usernameAndToken })
      queryClient.clear()
    },
  })

  const login = async ({ username, password }) => {
    const result = loginUserMutation.mutateAsync({ username, password })
    return result
  }

  return login
}

export default useLogin
