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
import CurrentLocationContext from '../contexts/CurrentLocationContext'
import { initialRegion } from './features/map/config'

import * as Location from 'expo-location'

const Main = () => {
  const authStorage = useAuthStorage()
  const [currentUser, setCurrentUser] = useState(null)
  const [coordinates, setCoordinates] = useState(null)
  useBackHandler()

  const login = async () => {
    const userFromStorage = await authStorage.getCurrentUser()
    if (userFromStorage) {
      setCurrentUser(userFromStorage)
    }
  }

  const getGpsPermission = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      setCoordinates(initialRegion)
      return
    }
    let location = await Location.getCurrentPositionAsync({})
    setCoordinates({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.1,
      longitudeDelta: 0.0112,
    })
  }

  useEffect(() => {
    login()
    getGpsPermission()
  }, [])

  return (
    <CurrentLocationContext.Provider value={{ coordinates, setCoordinates }}>
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
    </CurrentLocationContext.Provider>
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
