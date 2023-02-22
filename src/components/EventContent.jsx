import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Text from './Text'

const EventContent = ({ event }) => {
  return (
    <View style={styles.container}>
      <Text>{event.name}</Text>
      <ScrollView>
        <Text>{event.content}</Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
export default EventContent
