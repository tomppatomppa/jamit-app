import React from 'react'
import {
  SectionList,
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native'
import { useNavigate } from 'react-router-native'
import { MaterialIcons } from '../../../assets/images/icons'
import useCurrentLocation from '../../../hooks/useCurrentLocation'

import usePlaces from '../../../hooks/usePlaces'
import { Text } from '../../common'
import { EventListItem } from './components/EventListItem'
import { ItemSeparator } from './components/ItemSeparator'

const RenderSectionHeader = ({ section: { name, location } }, extraData) => {
  const { setCoordinates, navigate } = extraData

  const handlePress = () => {
    const coordinates = {
      latitude: location.coordinates[0],
      longitude: location.coordinates[1],
      latitudeDelta: 0.1,
      longitudeDelta: 0.0112,
    }
    setCoordinates(coordinates)
    navigate('/map')
  }

  return (
    <View>
      <Text style={styles.header}>
        {name}{' '}
        <MaterialIcons
          onPress={handlePress}
          name="gps-fixed"
          size={24}
          color="black"
        />
      </Text>
    </View>
  )
}

const PlaceListView = () => {
  const navigate = useNavigate()
  const { setCoordinates } = useCurrentLocation()
  const { places, isLoading, isError } = usePlaces()

  if (isLoading) {
    return (
      <View style={styles.activityContainer}>
        <ActivityIndicator size="large" />
        <Text>loading data...</Text>
      </View>
    )
  }

  if (isError) {
    return (
      <View style={styles.activityContainer}>
        <Text>Something went wrong loading data.</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={places}
        keyExtractor={(item, index) => item + index}
        renderItem={EventListItem}
        ItemSeparatorComponent={ItemSeparator}
        renderSectionHeader={(section) =>
          RenderSectionHeader(section, { setCoordinates, navigate })
        }
      />
    </View>
  )
}

export default PlaceListView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
    marginTop: 12,
  },
  title: {
    fontSize: 24,
  },
  activityContainer: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
