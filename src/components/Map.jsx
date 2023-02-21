import { Pressable, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'

const customMapStyle = [
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
]
//TODO: get device current location as initialRegion
const initialRegion = {
  latitude: 60.16427639500048,
  longitude: 24.944589799155526,
  latitudeDelta: 0.0012,
  longitudeDelta: 0.0112,
}

import useSearchQuery from '../hooks/useSearchQuery'
import theme from '../theme'
import Text from './Text'
import TopBar from './TopBar'

const Map = () => {
  const { data, isLoading, handleSetSearchQuery } = useSearchQuery()

  return (
    <View style={styles.container}>
      <TopBar />
      <Pressable
        onPress={() => console.log('Focus on loaction')}
        style={styles.gpsIcon}
      >
        <Text>O</Text>
      </Pressable>
      <MapView
        customMapStyle={customMapStyle}
        initialRegion={initialRegion}
        style={styles.map}
        onRegionChangeComplete={handleSetSearchQuery}
      >
        {isLoading
          ? ''
          : data.map((event, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: event.location.coordinates[0],
                  longitude: event.location.coordinates[1],
                }}
              ></Marker>
            ))}
      </MapView>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: '#e1e4e8',
  },
  map: {
    height: '100%',
  },
  topBarContainer: {
    height: 80,
    backgroundColor: theme.colors.primary,
  },
  gpsIcon: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    right: 10,
    top: 90,
    zIndex: 10,
    width: 30,
    height: 30,
    backgroundColor: theme.colors.primary,
    borderRadius: 60 / 2,
  },
})

export default Map
