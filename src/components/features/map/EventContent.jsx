import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import Text from '../../Text'

const ItemSeparator = () => <View style={styles.separator} />
const RenderEventItem = ({ item }) => <ListItem item={item} />

const ListItem = ({ item }) => {
  return (
    <View style={styles.listItem}>
      <Text fontWeight={'bold'}>{item.name}</Text>
      <Text>{item.content}</Text>
    </View>
  )
}

const EventContent = ({ event }) => {
  return (
    <FlatList
      data={event}
      renderItem={RenderEventItem}
      ItemSeparatorComponent={ItemSeparator}
    ></FlatList>
  )
}
export default EventContent

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
