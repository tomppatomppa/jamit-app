import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-native'
import { loginUser } from '../services/users'
import useAuthStorage from './useAuthStorage'
import { QueryClient } from '@tanstack/react-query'
const useLogin = () => {
  const queryClient = new QueryClient()
  const authStorage = useAuthStorage()
  const navigate = useNavigate()
  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      await authStorage.setAccessToken(data.token)
      queryClient.clear()
      navigate(-1)
    },
    onError: (error) => {
      console.log(error)
    },
  })

  const send = ({ username, password }) => {
    loginUserMutation.mutate({ username, password })
  }

  return send
}

export default useLogin
