import { QueryClient, useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useContext } from 'react'
import { useNavigate } from 'react-router-native'
import CurrentUserContext from '../../../../contexts/CurrentUserContext'
import useAuthStorage from '../../../../hooks/useAuthStorage'
import { BASE_URL } from '../../../../utils/constants'
import { showToast } from '../../../../utils/helpers'

const useLogin = () => {
  const navigate = useNavigate()
  const queryClient = new QueryClient()
  const authStorage = useAuthStorage()
  const { setCurrentUser } = useContext(CurrentUserContext)
  return useMutation(
    ({ username, password }) =>
      axios.post(`${BASE_URL}/api/login`, { username, password }),
    {
      onSuccess: async (response) => {
        const usernameAndToken = response.data
        await authStorage.setCurrentUser(usernameAndToken)
        setCurrentUser({
          ...usernameAndToken,
          credentialsProvider: `${BASE_URL}/api/me`,
        })
        queryClient.clear()
        showToast({
          type: 'success',
          text1: `Logged in as ${usernameAndToken.username}`,
        })
        navigate('/')
      },
    }
  )
}

export default useLogin
