import { useQuery } from '@tanstack/react-query'

import { getEvents } from '../services/events'

export const UseGetAllEvents = (variables) => {
  const { isLoading, data, refetch, status } = useQuery(['allEvents'], () =>
    getEvents(variables)
  )

  return { data, isLoading, refetch, status }
}
