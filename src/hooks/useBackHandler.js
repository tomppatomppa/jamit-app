import { useEffect } from 'react'
import { BackHandler } from 'react-native'
import { useNavigate, useLocation } from 'react-router-native'

const useBackHandler = () => {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const backAction = () => {
      if (location.pathname !== '/') {
        navigate(-1)
        return true
      }
    }

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    )

    return () => backHandler.remove()
  }, [])
}

export default useBackHandler
