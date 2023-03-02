import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Callout } from 'react-native-maps'
import theme from '../../../theme'
import Text from '../../Text'
import { Entypo } from '@expo/vector-icons'

const CalloutMarker = ({ event }) => {
  //TODO: fetch from cache all events at the same location
  //TODO: Avoid unneccessary renders of CalloutMarker, how?

  return (
    <Callout tooltip style={styles.callout}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <Entypo name="beamed-note" size={48} color="black" />
        </View>
        <View style={styles.infoContainer}>
          <Text fontSize={'subheading'}>{event.name}</Text>
          <Text
            style={{ flexGrow: 1 }}
            fontWeight={'bold'}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {event.start_date}
          </Text>
          <Text style={{ flexGrow: 1 }} numberOfLines={3} ellipsizeMode="tail">
            {event.content}
          </Text>
          <Text style={{ alignSelf: 'flex-end', margin: 6 }}>Read more...</Text>
        </View>
      </View>
    </Callout>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

    height: '100%',
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
  },
  iconContainer: {
    width: '100%',
    height: '40%',
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    paddingHorizontal: 6,
    alignItems: 'flex-start',

    flexGrow: 1,
    width: '100%',
  },
  icon: {},
  callout: {
    display: 'flex',
    backgroundColor: 'white',
    width: 200,
    height: 220,
  },
})

export default CalloutMarker
