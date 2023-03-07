import { StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { Marker } from 'react-native-maps'
import { Picker } from '@react-native-picker/picker'

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
import TopBar from './TopBar'

//TODO: get device current location as initialRegion
import { initialRegion } from '../../../utils/config'

import Drawer from './Drawer'
import EventContent from './EventContent'
import usePlaces from '../../../hooks/usePlaces'
import Text from '../../Text'

const Map = () => {
  const [before, setBefore] = useState('')
  const [envelope, setEnvelope] = useState(createEnvelope(initialRegion))
  const { places } = usePlaces({ envelope, before })
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
      <Text>filter before {before}</Text>
      <View style={styles.containerPicker}>
        <Picker
          prompt="Show events"
          style={styles.picker}
          selectedValue={before}
          onValueChange={setBefore}
        >
          <Picker.Item label="today" value="today" />
          <Picker.Item label="this week" value="week" />
          <Picker.Item label="this month" value="month" />
          <Picker.Item label="Show all places" value="" />
        </Picker>
      </View>

      <MapView
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
        {places?.map((event, index) => (
          <Marker
            title={event.name}
            key={index}
            coordinate={{
              latitude: event.location.coordinates[0],
              longitude: event.location.coordinates[1],
            }}
            identifier={event.id.toString()}
          />
        ))}
      </MapView>
      <Drawer showDrawer={showDrawer}>
        <EventContent
          id={selectedPlaceId}
          handleCloseDrawer={handleCloseDrawer}
        />
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
