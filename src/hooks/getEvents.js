import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const baseUrl = 'http://192.168.1.104:3000/api/events/'

const getEvents = async (variables) => {
  const response = await axios.get(baseUrl, { params: variables })
  console.log('refetch')
  return response.data
}

export const UseGetAllEvents = (variables) => {
  const { isLoading, data, refetch } = useQuery(['allEvents'], () =>
    getEvents(variables)
  )

  return { data, isLoading, refetch }
}
