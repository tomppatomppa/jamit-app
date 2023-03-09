import React from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import theme from '../../../../theme'
import Text from '../../../Text'

import { AntDesign } from '@expo/vector-icons'

import useEvent from '../../../../hooks/useEvent'
import { EventListItem } from './EventListItem'

const ItemSeparator = () => <View style={styles.separator} />
const RenderEventItem = ({ item }) => <EventListItem item={item} />

const EventList = ({ id, handleCloseDrawer }) => {
  const { data, fetchNextPage } = useEvent(id)

  const allEvents = data?.pages?.flatMap((page) => page.rows) ?? []

  if (allEvents.length === 0) {
    return (
      <View>
        <Text fontWeight={'bold'}></Text>
        <Text>No events currently available</Text>
      </View>
    )
  }
  return (
    <FlatList
      stickyHeaderIndices={[0]}
      ListHeaderComponent={
        <View style={styles.stickyHeadercontainer}>
          <Text>List header</Text>
          <Pressable onPress={handleCloseDrawer}>
            <AntDesign name="close" size={24} color="black" />
          </Pressable>
        </View>
      }
      contentContainerStyle={{ paddingBottom: 150 }}
      data={allEvents}
      renderItem={({ item }) => <RenderEventItem item={item} />}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={fetchNextPage}
      refreshing={true}
    />
  )
}
export default EventList

const styles = StyleSheet.create({
  container: {
    margin: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickyHeadercontainer: {
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.secondary,
    borderTopEndRadius: 60 / 2,
    borderTopLeftRadius: 60 / 2,
    borderBottomWidth: 1,
  },
  listItemContainer: {
    margin: 3,
    padding: 15,
    borderRadius: 60 / 2,
    borderBottomWidth: 1,
    borderColor: 'black',
  },
  separator: {
    height: 10,
  },
  buttonInterested: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 8,
    marginLeft: 12,
  },
})
