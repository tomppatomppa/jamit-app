import React from 'react'
import { Button, View } from 'react-native'
import theme from '../theme'

const Drawer = ({ children, showDrawer, handleCloseDrawer }) => {
  if (!showDrawer) return
  return (
    <View
      style={{
        position: 'absolute',
        width: '100%',
        height: '50%',
        bottom: 0,
        backgroundColor: theme.colors.secondary,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {children}
      <Button title="close" onPress={handleCloseDrawer}></Button>
    </View>
  )
}

export default Drawer
