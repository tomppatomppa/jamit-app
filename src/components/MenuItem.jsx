import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../theme'
import Text from './Text'

const MenuItem = ({ item }) => {
  return (
    <Pressable onPress={() => console.log('pressed')}>
      <View style={styles.container}>
        <Text>{item}</Text>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    marginBottom: 10,

    padding: 12,
    backgroundColor: theme.colors.primary,
  },
})
export default MenuItem
