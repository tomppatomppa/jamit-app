import axios from 'axios'

import { QueryClient, useMutation } from '@tanstack/react-query'

import { useContext } from 'react'
import useAuthStorage from './useAuthStorage'
import CurrentUserContext from '../contexts/CurrentUserContext'

import { baseUrl } from '../utils/config'
import { useNavigate } from 'react-router-native'
import { showToast } from '../utils/helpers'

const useLogin = () => {
  const navigate = useNavigate()
  const queryClient = new QueryClient()
  const authStorage = useAuthStorage()
  const { setCurrentUser } = useContext(CurrentUserContext)

  return useMutation(
    ({ username, password }) =>
      axios.post(`${baseUrl}/api/login`, { username, password }),
    {
      onSuccess: async (response) => {
        const usernameAndToken = response.data
        await authStorage.setCurrentUser(usernameAndToken)
        setCurrentUser({ ...usernameAndToken })
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
