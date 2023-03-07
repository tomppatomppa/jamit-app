import React, { useState } from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import theme from '../../../theme'
import Text from '../../Text'
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

import useEvent from '../../../hooks/useEvent'

const ItemSeparator = () => <View style={styles.separator} />
const RenderEventItem = ({ item }) => <ListItem item={item} />

const ListItem = ({ item }) => {
  const [showText, setShowText] = useState(false)
  const time = new Date(item.start_date)

  return (
    <View style={styles.listItemContainer}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        <Fontisto
          style={{
            padding: 6,
            alignSelf: 'center',
            marginRight: 15,
          }}
          name="music-note"
          size={24}
          color="green"
        />
        <Text style={{ flex: 1 }} fontWeight={'bold'}>
          {item.name}
        </Text>
        <MaterialCommunityIcons name="dots-vertical" size={24} color="black" />
        <Pressable
          style={{ marginLeft: 12 }}
          onPress={() => console.log('hide event')}
        >
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Date - {time.toUTCString().slice(0, 17)}</Text>
          <Text>Start Time - {`${time.getHours()}:${time.getMinutes()}`}</Text>
          <Pressable onPress={() => console.log('click')}>
            <Text>Open facebook - link</Text>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <EvilIcons name="star" size={24} color="black" />
          <Ionicons
            style={{ marginLeft: 24 }}
            name="bookmark-outline"
            size={24}
            color="black"
          />
        </View>
      </View>
      <Text
        fontSize={'subheading'}
        style={{ marginVertical: 6 }}
        fontWeight={'bold'}
      >
        Description
      </Text>
      <Text numberOfLines={showText ? 100 : 5} ellipsizeMode="tail">
        {item.content}
      </Text>
      <Pressable onPress={() => setShowText(!showText)}>
        <Text fontWeight={'bold'} title="show more">
          lue lisää...
        </Text>
      </Pressable>
      <Text fontWeight="bold" style={{ flex: 1, marginVertical: 12 }}>
        Source: {item.post_url}
      </Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginVertical: 12,
        }}
      >
        <Text fontWeight="bold" style={{ flex: 1 }}>
          {item.start_date}
        </Text>
        <Pressable style={styles.buttonInterested}>
          <Text color={'secondary'}>Interested</Text>
        </Pressable>
      </View>
    </View>
  )
}

const EventContent = ({ id, handleCloseDrawer }) => {
  const { data, fetchNextPage } = useEvent(id)

  const allEvents = data?.pages?.flatMap((page) => page.rows) ?? []

  if (allEvents.length === 0) {
    return (
      <View>
        <Text fontWeight={'bold'}></Text>
        <Text>No Jam sessions available</Text>
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
export default EventContent

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
