import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet, View } from 'react-native'
import theme from '../../../theme'
import ReturnButton from '../../ReturnButton'
import Text from '../../Text'
import useMe from './hooks/useMe'

import { DeleteButton, LogoutButton } from './UserButtons'

const UserSettings = () => {
  const { data, isLoading, isError } = useMe()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>loading....</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      {isError ? (
        <ErrorScreen />
      ) : (
        <ScrollView stickyHeaderIndices={[0]} style={styles.scrollView}>
          <View style={styles.stickyHeader}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ReturnButton />
              <Text fontSize={'subheading'}>UserSettings</Text>
            </View>
          </View>
          <Text>Account is: {data.disabled ? 'Disabled' : 'Active'}</Text>
          <Text>Email: {data.username}</Text>
          <Text>Username: {data.username}</Text>
          <Text>{data.disabled}</Text>
          <Text>Account Id: {data.id}</Text>
          <Text>Name: {data.name}</Text>
          <Text fontSize="subheading" fontWeight="bold">
            Roles
          </Text>
          {data.roles.map((role, index) => (
            <Text key={index}>{role}</Text>
          ))}
          <Text style={{}}>Account Created: {data.createdAt}</Text>
          <View style={styles.buttonContainer}>
            <DeleteButton />
            <LogoutButton />
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  )
}
const ErrorScreen = () => {
  return (
    <View>
      <Text>Could not get your data</Text>
      <LogoutButton />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    bottom: 0,
    backgroundColor: theme.colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  stickyHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: 80,
    backgroundColor: theme.colors.primary,
    padding: 10,
  },
  separator: {
    height: 10,
  },
  scrollView: {
    backgroundColor: 'pink',
    width: '100%',
    textAlign: 'center',
    display: 'flex',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
})
export default UserSettings
