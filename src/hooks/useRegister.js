import axios from 'axios'

import { baseUrl } from '../utils/config'

const useRegister = () => {
  const register = async ({ username, password }) => {
    const { data } = await axios.post(`${baseUrl}/api/users`, {
      username,
      password,
    })
    return data
  }
  return register
}

export default useRegister
