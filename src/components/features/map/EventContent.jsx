import React from 'react'
import { FlatList, Pressable, StyleSheet, View } from 'react-native'
import theme from '../../../theme'
import Text from '../../Text'
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

const ItemSeparator = () => <View style={styles.separator} />
const RenderEventItem = ({ item, handleCloseDrawer }) => (
  <ListItem item={item} handleCloseDrawer={handleCloseDrawer} />
)

const ListItem = ({ item, handleCloseDrawer }) => {
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
        <Pressable style={{ marginLeft: 12 }} onPress={handleCloseDrawer}>
          <AntDesign name="close" size={24} color="black" />
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 1 }}>
          <Text>Baari - €€€</Text>
          <Text>Start Time - {`${time.getHours()}:${time.getMinutes()}`}</Text>
          <Text>Open facebook - link</Text>
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
      <Text>{item.content}</Text>
      <Text fontWeight="bold" style={{ flex: 1 }}>
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

        <Pressable style={styles.interestedButton}>
          <Text color={'secondary'}>Interested</Text>
        </Pressable>
      </View>
    </View>
  )
}

const EventContent = ({ event, handleCloseDrawer }) => {
  return (
    <FlatList
      contentContainerStyle={{ paddingBottom: 150 }}
      data={event}
      renderItem={({ item }) => (
        <RenderEventItem item={item} handleCloseDrawer={handleCloseDrawer} />
      )}
      ItemSeparatorComponent={ItemSeparator}
      onEndReached={() => console.log('end')}
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
  interestedButton: {
    backgroundColor: theme.colors.primary,

    borderRadius: 3,
    padding: 8,
    marginLeft: 12,
  },
})
