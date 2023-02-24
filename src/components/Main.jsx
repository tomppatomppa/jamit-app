import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import CreateEvent from './CreateEvent'
import Landing from './Landing'
import Login from './login/Login'

import Map from './Map'
import CurrentUserContext from '../contexts/CurrentUserContext'
import useAuthStorage from '../hooks/useAuthStorage'
import RegisterUser from './login/RegisterUser'

const Main = () => {
  const authStorage = useAuthStorage()
  const [pressedLocation, setPressedLocation] = useState({})
  const [currentUser, setCurrentUser] = useState(null)

  const login = async () => {
    const userFromStorage = await authStorage.getCurrentUser()
    if (userFromStorage) {
      setCurrentUser(userFromStorage)
    }
  }
  useEffect(() => {
    login()
  }, [])

  return (
    <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
      <View style={styles.container}>
        <Routes>
          <Route path="/" element={<Landing />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route
            path="/map"
            element={<Map setPressedLocation={setPressedLocation} />}
            exact
          />
          <Route
            path="/create"
            element={<CreateEvent pressedLocation={pressedLocation} />}
            exact
          />
        </Routes>
      </View>
    </CurrentUserContext.Provider>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexGrow: 1,
    backgroundColor: '#fff',
  },
  buttonContainer: {
    width: 74,
    marginBottom: 12,
  },
})

export default Main
