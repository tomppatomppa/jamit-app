import React, { useState } from 'react'
import { Alert, Image, Pressable, StyleSheet, View } from 'react-native'
import theme from '../../../../theme'

import { EvilIcons } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'

import { CustomButton, Text } from '../../../common'
import { defaultImageUri } from '../config'

export const EventListItem = ({ item }) => {
  const [showText, setShowText] = useState(false)
  const time = new Date(item.start_date)

  const handleAddBookmark = () => {
    Alert.alert('Added to bookmarks')
  }
  const handleAddFavorite = () => {
    Alert.alert('Place hosting the event added to favorites')
  }
  const handleShare = () => {
    Alert.alert('Share with friend')
  }
  const handleInterested = () => {
    Alert.alert('Interested')
  }

  return (
    <View style={styles.listItemContainer}>
      <Image
        style={styles.backgroundImage}
        source={{
          uri: defaultImageUri,
        }}
        defaultSource={{
          uri: defaultImageUri,
        }}
      ></Image>

      <View style={{ padding: 6 }}>
        <View
          style={{
            flexDirection: 'row',
          }}
        >
          <View style={{ flex: 1 }}>
            <Text fontSize={'small'}>
              {time.toUTCString().slice(0, 11)}
              {'. klo '}
              {`${time.getHours()}:${time.getMinutes()}`}
            </Text>
            <Text fontWeight="bold" style={{ flex: 1 }}>
              {item.name}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <EvilIcons
              onPress={handleAddFavorite}
              name="star"
              size={24}
              color="black"
            />
            <Ionicons
              onPress={handleAddBookmark}
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
        <Text numberOfLines={showText ? 100 : 3} ellipsizeMode="tail">
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
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginVertical: 12,
          }}
        >
          <CustomButton
            onPress={handleInterested}
            style={{ flex: 1, marginRight: 6, flexDirection: 'row' }}
          >
            <EvilIcons name="star" size={20} color="black" />
            <Text color={'black'}>Interested</Text>
          </CustomButton>
          <CustomButton onPress={handleShare}>
            <Text color={'black'}>Share</Text>
          </CustomButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  listItemContainer: {
    overflow: 'hidden',
    borderRadius: 10,
    borderWidth: 1,
    marginHorizontal: 6,
    borderColor: 'black',
    backgroundColor: theme.colors.secondary,
  },
  backgroundImage: { resizeMode: 'cover', height: 170 },
  buttonShare: {
    backgroundColor: theme.colors.primary,
    borderRadius: 3,
    padding: 8,
    marginLeft: 12,
  },
})
