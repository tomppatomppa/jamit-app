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
import { calculateArea } from '../../../utils/helpers'
import React, { useState } from 'react'

//TODO: get device current location as initialRegion

import theme from '../../../theme'

import TopBar from './TopBar'

import { initialRegion } from '../../../utils/config'

import CalloutMarker from './CalloutMarker'
import Drawer from './Drawer'

import EventContent from './EventContent'
import useEvents from '../../../hooks/useEvents'

const Map = () => {
  const [filter, setFilter] = useState('')
  const { data } = useEvents(filter)

  const [selectedEvent, setSelectedEvent] = useState([])
  const [showDrawer, setShowDrawer] = useState(false)

  const handleOpenDrawer = () => {
    setShowDrawer(true)
  }
  const handleCloseDrawer = () => {
    setShowDrawer(false)
  }

  const getEventDetails = (e) => {
    console.log(e.nativeEvent)
    handleCloseDrawer()
    const { latitude, longitude } = e.nativeEvent.coordinate
    const foundEvent = data.filter(
      (event) =>
        event.location.coordinates[0] === latitude &&
        event.location.coordinates[1] === longitude
    )
    if (foundEvent) {
      setSelectedEvent(foundEvent)
    }
  }
  const handleSetFilter = (e) => {
    const area = calculateArea(e)
    setFilter(area)
  }
  return (
    <View style={styles.container}>
      <TopBar />
      <MapView
        onPress={handleCloseDrawer}
        moveOnMarkerPress={false}
        onMarkerPress={getEventDetails}
        onCalloutPress={handleOpenDrawer}
        showsUserLocation={true}
        customMapStyle={customMapStyle}
        initialRegion={initialRegion}
        style={styles.map}
        onRegionChangeComplete={handleSetFilter}
      >
        {data?.map((event, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: event.location.coordinates[0],
              longitude: event.location.coordinates[1],
            }}
          >
            {/* //TODO: dont render this unless its marker is selected */}
            <CalloutMarker event={event} />
          </Marker>
        ))}
      </MapView>
      <Drawer showDrawer={showDrawer} handleCloseDrawer={handleCloseDrawer}>
        <EventContent event={selectedEvent} />
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
