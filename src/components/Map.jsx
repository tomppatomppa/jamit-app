import { StyleSheet, View } from 'react-native'
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

import React from 'react'

//TODO: get device current location as initialRegion

import useSearchQuery from '../hooks/useSearchQuery'
import theme from '../theme'

import TopBar from './TopBar'
import { useNavigate } from 'react-router-native'
import { initialRegion } from '../utils/config'

const Map = ({ setPressedLocation }) => {
  const { data, isLoading, handleSetSearchQuery } = useSearchQuery()
  const navigate = useNavigate()

  const handlePress = (e) => {
    setPressedLocation(() => e.nativeEvent.coordinate)
    navigate('/create')
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <MapView
        onLongPress={handlePress}
        showsUserLocation={true}
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
})

export default Map
