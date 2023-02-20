import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import theme from '../theme'

const styles = StyleSheet.create({
  marker: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 70,
    width: 50,
    marginLeft: 15,
    backgroundColor: theme.colors.primary,
  },
})

const CustomMarker = ({ title }) => {
  return (
    <View style={styles.marker}>
      <Text>{title}</Text>
    </View>
  )
}

export default CustomMarker
