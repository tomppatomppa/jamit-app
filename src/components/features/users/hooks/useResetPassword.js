import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { useNavigate } from 'react-router-native'

import { baseUrl } from '../../../../utils/config'
import { showToast } from '../../../../utils/helpers'

const useResetPassword = () => {
  const navigate = useNavigate()
  const { mutate } = useMutation(
    ({ code, password }) =>
      axios.put(`${baseUrl}/api/reset`, { token: code, password }),
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
