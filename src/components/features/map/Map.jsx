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

import theme from '../../../theme'
import TopBar from './TopBar'

//TODO: get device current location as initialRegion
import { initialRegion } from '../../../utils/config'

import CalloutMarker from './CalloutMarker'
import Drawer from './Drawer'

import EventContent from './EventContent'
import useEvents from '../../../hooks/useEvents'

const initialQuery = {
  ...calculateArea(initialRegion),
  after: '',
  before: '',
  limit: 50,
}
const Map = () => {
  const [selectedDate, setSelectedDate] = useState('')
  const [queryParams, setQueryParams] = useState(initialQuery)
  const { data } = useEvents(queryParams)

  const [selectedEvent, setSelectedEvent] = useState([])
  const [showDrawer, setShowDrawer] = useState(false)

  const handleOpenDrawer = () => {
    setShowDrawer(true)
  }
  const handleCloseDrawer = () => {
    setShowDrawer(false)
  }
  //TODO: fix setting the search query params
  const handleSelect = (value) => {
    setSelectedDate(value)
    setQueryParams((prev) => {
      return {
        ...prev,
        before: value,
      }
    })
  }
  const handleSetFilter = (values) => {
    setQueryParams((prev) => {
      return {
        ...prev,
        ...values,
      }
    })
  }

  //TODO: remove this
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

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.containerPicker}>
        <Picker
          prompt="Show events"
          style={styles.picker}
          selectedValue={selectedDate}
          onValueChange={handleSelect}
        >
          <Picker.Item label="today" value="today" />
          <Picker.Item label="this week" value="week" />
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
        onRegionChangeComplete={(e) => handleSetFilter(calculateArea(e))}
      >
        {data?.map((event, index) => (
          <Marker
            key={index}
            coordinate={{
              latitude: event.location.coordinates[0],
              longitude: event.location.coordinates[1],
            }}
          >
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
