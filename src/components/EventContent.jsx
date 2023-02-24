import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Text from './Text'

const ItemSeparator = () => <View style={styles.separator} />
const RenderRepositoryItem = ({ item }) => <ListItem item={item} />

const EventContent = ({ event }) => {
  return (
    <FlatList
      data={event}
      renderItem={RenderRepositoryItem}
      ItemSeparatorComponent={ItemSeparator}
    ></FlatList>
  )
}
const ListItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text fontWeight={'bold'}>{item.name}</Text>
      <Text>{item.content}</Text>
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
  listItem: {
    padding: 12,
    borderWidth: 2,
    borderColor: 'black',
  },
  separator: {
    height: 10,
  },
})
export default EventContent
