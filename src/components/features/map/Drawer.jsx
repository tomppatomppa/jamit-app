import React from 'react'
import { Button, StyleSheet, View } from 'react-native'

const Drawer = ({ children, showDrawer, handleCloseDrawer }) => {
  if (!showDrawer) return
  return <View style={styles.container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    bottom: 0,
    backgroundColor: 'white',
    borderRadius: 60 / 2,
  },
})
export default Drawer
