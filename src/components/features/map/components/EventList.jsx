import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import theme from '../../../../theme'

import useEvent from '../../../../hooks/useEvent'
import { EventListItem } from './EventListItem'
import { Text } from '../../../common'
import { ItemSeparator } from './ItemSeparator'

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
      contentContainerStyle={styles.listContainer}
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
  listContainer: {
    paddingBottom: 150,
    alignItems: 'center',
    minWidth: '100%',
    backgroundColor: theme.colors.primary,
  },
})
