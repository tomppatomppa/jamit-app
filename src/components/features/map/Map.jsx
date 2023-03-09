import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { PROVIDER_GOOGLE } from 'react-native-maps'
// import { Picker } from '@react-native-picker/picker'

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
import { createEnvelope } from '../../../utils/helpers'
import React, { useState } from 'react'

import theme from '../../../theme'
import TopBar from './components/TopBar'

import usePlaces from '../../../hooks/usePlaces'
import Text from '../../Text'

import CustomMarker from './components/CustomMarker'
import Drawer from './components/Drawer'
import EventList from './components/EventList'

export const initialRegion = {
  latitude: 60.16020639500048,
  longitude: 24.944589799155526,
  latitudeDelta: 0.0012,
  longitudeDelta: 0.0112,
}

const Map = () => {
  const [envelope, setEnvelope] = useState(createEnvelope(initialRegion))
  const { places } = usePlaces({ envelope })
  const [selectedPlaceId, setSelectedPlaceId] = useState(null)

  const [showDrawer, setShowDrawer] = useState(false)

  const handleOpenDrawer = () => {
    setShowDrawer(true)
  }
  const handleCloseDrawer = () => {
    setShowDrawer(false)
  }
  const handleSetQuery = (e) => {
    setEnvelope(createEnvelope(e))
  }

  const handleMarkerPress = (e) => {
    const markerId = e.nativeEvent.id
    setSelectedPlaceId(markerId)
    handleOpenDrawer()
  }

  return (
    <View style={styles.container}>
      <TopBar />
      <Text>Places visible {places?.length}</Text>
      <Text>Showing all locations</Text>
      <MapView
        provider={PROVIDER_GOOGLE}
        onPress={handleCloseDrawer}
        moveOnMarkerPress={false}
        onMarkerPress={handleMarkerPress}
        onCalloutPress={handleOpenDrawer}
        showsUserLocation={true}
        customMapStyle={customMapStyle}
        initialRegion={initialRegion}
        style={styles.map}
        onRegionChangeComplete={handleSetQuery}
      >
        {places?.map((place, index) => (
          <CustomMarker data={place} key={index} />
        ))}
      </MapView>
      <Drawer showDrawer={showDrawer}>
        <EventList id={selectedPlaceId} handleCloseDrawer={handleCloseDrawer} />
      </Drawer>
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
  containerPicker: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  picker: {
    backgroundColor: theme.colors.secondary,
    flex: 1,
  },
  map: {
    height: '100%',
  },
  topBarContainer: {
    height: 80,
    backgroundColor: theme.colors.primary,
  },
  selected: {
    width: 20,
    position: 'absolute',
    bottom: 0,
  },
})

export default Map
