import axios from 'axios'
import { baseUrl } from '../utils/config'

export const loginUser = async ({ username, password }) => {
  const { data } = await axios.post(`${baseUrl}/api/login`, {
    username,
    password,
  })
  return data
}

export const createUser = async () => {
  return 'create user'
}
