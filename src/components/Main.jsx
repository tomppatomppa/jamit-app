import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import CreateEvent from './CreateEvent'
import Landing from './Landing'

import Map from './Map'
import CurrentUserContext from '../contexts/CurrentUserContext'
import useAuthStorage from '../hooks/useAuthStorage'

import UserLogin from './features/users/UserLogin'
import UserRegister from './features/users/UserRegister'

const Main = () => {
  const authStorage = useAuthStorage()
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
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
          <Route path="/map" element={<Map />} exact />
          <Route path="/create" element={<CreateEvent />} exact />
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
