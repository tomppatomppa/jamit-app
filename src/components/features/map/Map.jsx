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
  const [selectedDate, setSelectedDate] = useState('')
  const [filter, setFilter] = useState(calculateArea(initialRegion))
  const { data } = useEvents(filter, selectedDate)

  const [selectedEvent, setSelectedEvent] = useState([])
  const [showDrawer, setShowDrawer] = useState(false)

  const handleOpenDrawer = () => {
    setShowDrawer(true)
  }
  const handleCloseDrawer = () => {
    setShowDrawer(false)
  }

  const getEventDetails = (e) => {
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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <Picker
          prompt="Show events"
          style={{
            backgroundColor: theme.colors.secondary,
            flex: 1,

            justifyContent: 'flex-end',
            alignItems: 'flex-end',
          }}
          selectedValue={selectedDate}
          onValueChange={(itemValue) => setSelectedDate(itemValue)}
        >
          <Picker.Item label="today" value="today" />
          <Picker.Item label="this week" value="week" />
          <Picker.Item label="this month" value="month" />
          <Picker.Item label="show all" value="" />
        </Picker>
      </View>

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
