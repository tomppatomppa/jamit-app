import { useMutation } from '@tanstack/react-query'
import { useNavigate } from 'react-router-native'
import { loginUser } from '../services/users'
import useAuthStorage from './useAuthStorage'
import { QueryClient } from '@tanstack/react-query'
import { useContext } from 'react'
import CurrentUserContext from '../contexts/CurrentUserContext'

const useLogin = () => {
  const { setCurrentUser } = useContext(CurrentUserContext)
  const queryClient = new QueryClient()
  const authStorage = useAuthStorage()
  const navigate = useNavigate()

  const loginUserMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: async (data) => {
      await authStorage.setAccessToken(data.token)
      setCurrentUser({ username: data.username })
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
