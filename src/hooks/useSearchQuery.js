import { useState } from 'react'
import { UseGetAllEvents } from './getEvents'

const useSearchQuery = (initialState) => {
  const [searchQuery, setSearchQuery] = useState(initialState)
  const { refetch, data, isLoading } = UseGetAllEvents(searchQuery)

  const handleSetSearchQuery = (variables) => {
    const { latitude, longitude, latitudeDelta, longitudeDelta } = variables

    const bottomLeft = {
      latitude: latitude - latitudeDelta / 2,
      longitude: longitude - longitudeDelta / 2,
    }
    const topRight = {
      latitude: latitude + latitudeDelta / 2,
      longitude: longitude + longitudeDelta / 2,
    }

    setSearchQuery({
      search: {
        xmin: bottomLeft.latitude.toString(),
        ymin: bottomLeft.longitude.toString(),
        xmax: topRight.latitude.toString(),
        ymax: topRight.longitude.toString(),
      },
    })
    refetch()
  }
  return { data, isLoading, handleSetSearchQuery }
}

export default useSearchQuery
