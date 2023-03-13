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

const renderItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.title}>{item.start_date}</Text>
      <Text numberOfLines={5} ellipsizeMode="tail">
        {item.content}
      </Text>
    </View>
  )
}

const renderSectionHeader = ({ section: { name } }) => {
  return <Text style={styles.header}>{name}</Text>
}

const renderListEmptyComponent = () => {
  return <Text>Empty</Text>
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
      <Text>Show as list view</Text>
      <SectionList
        sections={places}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListEmptyComponent={renderListEmptyComponent}
      />
    </View>
  )
}

export default PlaceListView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
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
