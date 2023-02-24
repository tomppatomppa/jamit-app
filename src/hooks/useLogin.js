import { QueryClient, useMutation } from '@tanstack/react-query'

import { useContext } from 'react'
import useAuthStorage from './useAuthStorage'
import CurrentUserContext from '../contexts/CurrentUserContext'
import axios from 'axios'
import { baseUrl } from '../utils/config'
import { useNavigate } from 'react-router-native'

const useLogin = () => {
  const navigate = useNavigate()
  const queryClient = new QueryClient()
  const authStorage = useAuthStorage()
  const { setCurrentUser } = useContext(CurrentUserContext)

  return useMutation(
    ({ username, password }) =>
      axios.post(`${baseUrl}/api/login`, { username, password }),
    {
      onSuccess: async (usernameAndToken) => {
        await authStorage.setCurrentUser(usernameAndToken)
        setCurrentUser({ ...usernameAndToken })
        queryClient.clear()
        navigate('/')
      },
      onError: (error, variables) => {
        console.log(error)
        console.log(variables)
      },
    }
  )
}

export default useLogin
