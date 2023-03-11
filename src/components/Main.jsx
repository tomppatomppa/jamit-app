import { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'

import CurrentUserContext from '../contexts/CurrentUserContext'
import useAuthStorage from '../hooks/useAuthStorage'

import Map from './features/map/Map'
import Home from './Home'

import UserSettings from './features/users/UserSettings'
import useBackHandler from '../hooks/useBackHandler'
import PasswordReset from './features/Authorization/PasswordReset'
import Login from './features/Authorization/Login'
import Register from './features/Authorization/Register'
import PlaceListView from './features/map/PlaceListView'

const Main = () => {
  useBackHandler()
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
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<PasswordReset />} />
          <Route path="/settings" element={<UserSettings />} />
          <Route path="/map" element={<Map />} exact />
          <Route path="/list" element={<PlaceListView />} exact />
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
