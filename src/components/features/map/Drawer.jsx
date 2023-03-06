import React from 'react'
import { StyleSheet, View } from 'react-native'

const Drawer = ({ children, showDrawer }) => {
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
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})
export default Drawer
