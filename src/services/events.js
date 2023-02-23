import axios from 'axios'
import { baseUrl } from '../utils/config'

export const getEvents = async (variables) => {
  const response = await axios.get(baseUrl + '/api/events', {
    params: variables,
  })
  console.log('refetch')
  return response.data
}

export const createEvent = async (event) => {
  console.log(event)
  // const response = await axios.post(baseUrl, { event })
  // return response.data
}
export const loginUser = async ({ username, password }) => {
  console.log(username, password)
  try {
    const response = await axios.post(`${baseUrl}/api/login`, {
      username,
      password,
    })
    return response.data
  } catch (e) {
    throw new Error(e.response.data.error)
  }
}
