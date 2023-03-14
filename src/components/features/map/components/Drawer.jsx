import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../../../../theme'
import { Text } from '../../../common'

const Drawer = ({ children, showDrawer, handleCloseDrawer }) => {
  if (!showDrawer) return
  return (
    <View style={styles.container}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.colors.primary,
          width: '100%',
        }}
      >
        <Pressable onPress={handleCloseDrawer}>
          <Text>Close</Text>
        </Pressable>
      </View>
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '60%',
    bottom: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
})
export default Drawer
