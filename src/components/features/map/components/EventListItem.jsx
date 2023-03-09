import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../../../../theme'
import Text from '../../../Text'
import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'

export const EventListItem = ({ item }) => {
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
        <Text style={{ flex: 1 }}>{item.name}</Text>
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
          <Text fontWeight={'bold'}>
            Date - {time.toUTCString().slice(0, 17)}
          </Text>
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
      <Text fontSize={'subheading'} style={{ marginVertical: 6 }}>
        Description
      </Text>
      <Text numberOfLines={showText ? 100 : 5} ellipsizeMode="tail">
        {item.content}
      </Text>
      <Pressable onPress={() => setShowText(true)}>
        <Text fontWeight={'bold'} title="show more">
          {showText ? '' : 'lue lisää...'}
        </Text>
      </Pressable>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginVertical: 12,
        }}
      >
        <Pressable style={styles.buttonShare}>
          <Text color={'secondary'}>Share</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listItemContainer: {
    margin: 3,
    padding: 15,
    borderRadius: 60 / 2,
    borderBottomWidth: 1,
    borderColor: 'black',
  },

  buttonShare: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 8,
    marginLeft: 12,
  },
})
