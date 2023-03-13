import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import theme from '../../../../theme'

import useEvent from '../../../../hooks/useEvent'
import { EventListItem } from './EventListItem'
import { Text } from '../../../common'

const ItemSeparator = () => <View style={styles.separator} />
const RenderEventItem = ({ item }) => <EventListItem item={item} />

const EventList = ({ id }) => {
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
      contentContainerStyle={{
        paddingBottom: 150,
        alignItems: 'center',

        minWidth: '100%',
        backgroundColor: theme.colors.primary,
      }}
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
  stickyHeadercontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    width: '100%',
    backgroundColor: 'red',
  },
  separator: {
    height: 10,
  },
})
