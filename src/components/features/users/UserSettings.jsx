import React, { useState } from 'react'
import {
  ActivityIndicator,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import theme from '../../../theme'

import Text from '../../Text'
import useMe from './hooks/useMe'

import ErrorScreen from './components/ErrorScreen'
import { AccountView } from './components/AccountView'
import { ActivityView } from './components/ActivityView'

import Navbar from '../../Navbar'

const UserSettings = () => {
  const [menuSelected, setMenuSelected] = useState('Account')
  const { data, isLoading, isError } = useMe()

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <Text>loading....</Text>
      </View>
    )
  }
  if (isError) return <ErrorScreen />

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollView}>
        <Navbar>
          <View style={styles.headerMenu}>
            <Pressable
              onPress={() => setMenuSelected('Activity')}
              style={[
                styles.headerItem,
                menuSelected === 'Activity' && styles.selectedHeaderItem,
              ]}
            >
              <Text fontSize={'subheading'}>Activity</Text>
            </Pressable>
            <View style={styles.headerDivider} />
            <Pressable
              onPress={() => setMenuSelected('Account')}
              style={[
                styles.headerItem,
                menuSelected === 'Account' && styles.selectedHeaderItem,
              ]}
            >
              <Text fontSize={'subheading'}>Account</Text>
            </Pressable>
          </View>
        </Navbar>
        {menuSelected === 'Account' ? (
          <AccountView data={data} />
        ) : (
          <ActivityView />
        )}
      </ScrollView>
    </SafeAreaView>
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
  headerMenuContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerMenu: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    maxWidth: 250,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: theme.colors.secondaryLight,
  },
  headerItem: {
    flex: 1,
    alignItems: 'center',
    padding: 2,
  },
  selectedHeaderItem: {
    backgroundColor: theme.colors.complementary,
  },
  headerDivider: {
    borderEndWidth: 1,
    borderColor: 'black',
  },
  separator: {
    height: 10,
  },
  scrollView: {
    backgroundColor: theme.colors.secondary,
    width: '100%',
    textAlign: 'center',
    display: 'flex',
  },
})
export default UserSettings
