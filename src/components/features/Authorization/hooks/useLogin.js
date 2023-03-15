import { useMutation, useQueryClient } from '@tanstack/react-query'

import { useNavigate } from 'react-router-native'

import useCurrentUser from '../../../../hooks/useCurrentUser'
import { showToast } from '../../../../utils/helpers'
import { login } from '../../../../services/login'

const useLogin = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  const { setCurrentUser } = useCurrentUser()

  return useMutation((credentials) => login(credentials), {
    onSuccess: async (response) => {
      const usernameAndToken = response
      setCurrentUser({
        ...usernameAndToken,
      })
      queryClient.clear()
      showToast({
        type: 'success',
        text1: `Logged in as ${usernameAndToken.username}`,
      })
      navigate('/')
    },
  })
}

export default useLogin
