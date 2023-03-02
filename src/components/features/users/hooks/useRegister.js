import { useMutation } from '@tanstack/react-query'
import axios from 'axios'

import { baseUrl } from '../../../../utils/config'

import useLogin from './useLogin'

const useRegister = () => {
  const { mutate } = useLogin()
  return useMutation(
    ({ username, password }) =>
      axios.post(`${baseUrl}/api/users`, { username, password }),
    {
      onSuccess: async (response, variables) => {
        mutate(variables)
      },
    }
  )
}

export default useRegister
