import { useContext } from 'react'
import CurrentLocationContext from '../contexts/CurrentLocationContext'

const useCurrentLocation = () => {
  return useContext(CurrentLocationContext)
}

export default useCurrentLocation
