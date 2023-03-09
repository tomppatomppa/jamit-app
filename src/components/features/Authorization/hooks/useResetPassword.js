import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-native'

import { BASE_URL } from '../../../../utils/constants'
import { showToast } from '../../../../utils/helpers'

const useResetPassword = () => {
  const navigate = useNavigate()
  const { mutate } = useMutation(
    ({ code, password }) =>
      axios.put(`${BASE_URL}/api/reset`, { token: code, password }),
    {
      onSuccess: async (response) => {
        showToast({
          type: 'success',
          text1: 'Password reset!',
          error: response.data,
        })
        navigate('/login')
      },
    }
  )
  return { reset: mutate }
}

export default useResetPassword
