import React, { useState } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import MapView from 'react-native-maps'
import { PROVIDER_GOOGLE } from 'react-native-maps'
import { Entypo } from '@expo/vector-icons'

import { customMapStyle } from './config'
import { createEnvelope } from '../../../utils/helpers'
import theme from '../../../theme'
import usePlaces from '../../../hooks/usePlaces'

import CustomMarker from './components/CustomMarker'
import Drawer from './components/Drawer'
import EventList from './components/EventList'
import { useNavigate } from 'react-router-native'
import { Navbar, Text } from '../../common'
import useCurrentLocation from '../../../hooks/useCurrentLocation'

const Map = () => {
  const navigate = useNavigate()
  const { coordinates } = useCurrentLocation()
  const [envelope, setEnvelope] = useState(createEnvelope(coordinates))
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
      <Navbar>
        <Text>Jamit</Text>
      </Navbar>
      <MapView
        provider={PROVIDER_GOOGLE}
        onPress={handleCloseDrawer}
        moveOnMarkerPress={false}
        onMarkerPress={handleMarkerPress}
        onCalloutPress={handleOpenDrawer}
        showsUserLocation={true}
        customMapStyle={customMapStyle}
        initialRegion={coordinates}
        style={styles.map}
        onRegionChangeComplete={handleSetQuery}
      >
        {places?.map((place, index) => (
          <CustomMarker data={place} key={index} />
        ))}
      </MapView>
      <Pressable
        onPress={() => navigate('/list')}
        style={styles.buttonListview}
      >
        <View
          style={{
            alignSelf: 'center',
            flexDirection: 'row',
          }}
        >
          <Entypo name="list" size={20} color="black" />
          <Text style={{ marginLeft: 5 }}>Listview</Text>
        </View>
      </Pressable>
      <Drawer showDrawer={showDrawer} handleCloseDrawer={handleCloseDrawer}>
        <EventList id={selectedPlaceId} />
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
  buttonListview: {
    position: 'absolute',
    bottom: 100,
    height: 40,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: theme.colors.primary,
    borderWidth: 1,
    borderRadius: 20,
  },
})

export default Map
