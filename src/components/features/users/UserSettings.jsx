import React, { useState } from 'react'
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import theme from '../../../theme'

import { Text, Navbar } from '../../common'
import { Account } from './components/Account'
import Bookmarks from './components/Bookmarks'

const UserSettings = () => {
  const [menuSelected, setMenuSelected] = useState('Account')

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollView}>
        <Navbar>
          <View style={styles.headerMenu}>
            <Pressable
              onPress={() => setMenuSelected('Bookmarks')}
              style={[
                styles.headerItem,
                menuSelected === 'Bookmarks' && styles.selectedHeaderItem,
              ]}
            >
              <Text fontSize={'subheading'}>Bookmarks</Text>
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
            <View style={styles.headerDivider} />
          </View>
        </Navbar>
        {MenuSwitch(menuSelected)}
      </ScrollView>
    </SafeAreaView>
  )
}
const MenuSwitch = (menuSelected) => {
  if (menuSelected === 'Account') return <Account />
  if (menuSelected === 'Bookmarks') return <Bookmarks />
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
