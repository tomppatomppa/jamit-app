import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import Text from '../../../Text'
import useLogout from '../../Authorization/hooks/useLogout'

const ErrorScreen = () => {
  const logout = useLogout()
  return (
    <View style={styles.container}>
      <Text>Could not get your data</Text>
      <Button onPress={() => logout()} title="logout"></Button>
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
