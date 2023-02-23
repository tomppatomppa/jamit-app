import { useState } from 'react'
import { UseGetAllEvents } from '../reactQuery/queries'
import { calculateRectangle } from '../utils/helpers'

const useEvents = (initialState) => {
  const [searchQuery, setSearchQuery] = useState(initialState)
  const { refetch, data, isLoading } = UseGetAllEvents(searchQuery)

  const handleSetSearchQuery = (variables) => {
    const search = calculateRectangle(variables)
    setSearchQuery(search)
    refetch()
  }

  return { refetch, data, isLoading, handleSetSearchQuery }
}

export default useEvents
