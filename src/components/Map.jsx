import { StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'

const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
})

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

const initialRegion = {
  latitude: 60.16427639500048,
  longitude: 24.944589799155526,
  latitudeDelta: 0.0012,
  longitudeDelta: 0.0112,
}

import useSearchQuery from '../hooks/useSearchQuery'

const Map = () => {
  const { data, isLoading, handleSetSearchQuery } = useSearchQuery()

  return (
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
  )
}

export default Map
