import React from 'react'
import {
  SectionList,
  StyleSheet,
  View,
  StatusBar,
  ActivityIndicator,
} from 'react-native'

import usePlaces from '../../../hooks/usePlaces'
import { Text } from '../../common'
import { EventListItem } from './components/EventListItem'
import { ItemSeparator } from './components/ItemSeparator'

const renderSectionHeader = ({ section: { name } }) => {
  return <Text style={styles.header}>{name}</Text>
}

const PlaceListView = () => {
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
        renderSectionHeader={renderSectionHeader}
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
