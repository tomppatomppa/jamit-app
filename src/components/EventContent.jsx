import React from 'react'
import { ScrollView, StyleSheet, View } from 'react-native'
import Text from './Text'

const EventContent = ({ event }) => {
  //TODO: handle cases where mutliple events are in the same location
  if (event.length > 1) {
    return (
      <View style={styles.container}>
        <Text style={{ marginBottom: 12 }}>{'Multiple events'}</Text>
        {event.map((e) => (
          <Text key={e.id}>{e.name}</Text>
        ))}
      </View>
    )
  }
  return (
    <View style={styles.container}>
      <Text>{event[0].name}</Text>
      <ScrollView>
        <Text>{event[0].content}</Text>
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
