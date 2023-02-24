import axios from 'axios'
import { baseUrl } from '../utils/config'

export const getEvents = async (variables) => {
  const response = await axios.get(baseUrl + '/api/events', {
    params: variables,
  })

  return response.data
}

export const createEvent = async (event) => {
  console.log(event)
  // const response = await axios.post(baseUrl, { event })
  // return response.data
}
