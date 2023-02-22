import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import theme from '../theme'

const Drawer = ({ children, showDrawer, handleCloseDrawer }) => {
  if (!showDrawer) return
  return (
    <View style={styles.container}>
      {children}
      <View style={{ bottom: 20, alignSelf: 'flex-end' }}>
        <Button onPress={handleCloseDrawer} title="Close"></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '50%',
    bottom: 0,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default Drawer
