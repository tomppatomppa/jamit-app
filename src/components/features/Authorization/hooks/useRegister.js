import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { BASE_URL } from '../../../../utils/constants'
import useLogin from './useLogin'

const useRegister = () => {
  const { mutate } = useLogin()
  return useMutation(
    ({ username, password }) =>
      axios.post(`${BASE_URL}/api/users`, { username, password }),
    {
      onSuccess: async (response, variables) => {
        mutate(variables)
      },
    }
  )
}

export default useRegister
