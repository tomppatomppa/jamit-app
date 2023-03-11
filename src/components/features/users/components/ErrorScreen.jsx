import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'

import Text from '../../../Text'
import useLogout from '../../Authorization/hooks/useLogout'

const ErrorScreen = () => {
  const navigate = useNavigate()
  const { logout } = useLogout()

  const handleReturn = () => {
    logout()
    navigate('/')
  }
  return (
    <View style={styles.container}>
      <Text>Could not get your data</Text>
      <Button onPress={handleReturn} title="Return"></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
})
export default ErrorScreen
