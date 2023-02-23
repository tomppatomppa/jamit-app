import { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { Route, Routes } from 'react-router-native'
import CreateEvent from './CreateEvent'
import Landing from './Landing'
import Login from './login/Login'

import Map from './Map'

const Main = () => {
  const [pressedLocation, setPressedLocation] = useState({})
  return (
    <View style={styles.container}>
      <Routes>
        <Route path="/" element={<Landing />} exact />
        <Route path="/login" element={<Login />} />
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
  )
}
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: 74,
    marginBottom: 12,
  },
})

export default Main
