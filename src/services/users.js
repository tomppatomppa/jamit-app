import axios from 'axios'
import { baseUrl } from '../utils/config'

export const loginUser = async ({ username, password }) => {
  try {
    const { data } = await axios.post(`${baseUrl}/api/login`, {
      username,
      password,
    })
    return data
  } catch (e) {
    console.log(e)
    throw new Error(e.response.data.error)
  }
}

export const createUser = async () => {
  return 'create user'
}
