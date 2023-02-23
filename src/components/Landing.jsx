import React from 'react'
import {
  Button,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { useNavigate } from 'react-router-native'
import theme from '../theme'
import Text from './Text'

const MenuItemTitles = [
  'Jamit',
  'Open Mic',
  'Other',
  'Other',
  'Other',
  'Other',
  'Other',
  'Other',
]

const Landing = () => {
  const navigate = useNavigate()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollView}>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'flex-end',
            height: 80,
            backgroundColor: 'green',
            padding: 10,
          }}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Button title="menu">ads</Button>
            <Text style={{ flex: 1 }}>Logo</Text>
            <Button onPress={() => navigate('/login')} title="Login">
              ads
            </Button>
          </View>
        </View>
        <View style={{ height: 400, alignItems: 'center' }}>
          <Text>This is Description</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            padding: 12,
          }}
        >
          {MenuItemTitles.map((item, index) => (
            <MenuItem key={index} title={item} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
const MenuItem = ({ title }) => {
  const navigate = useNavigate()
  return (
    <Pressable style={styles.menuItem} onPress={() => navigate('/map')}>
      <View style={styles.menuItemImage}>
        <Text>Image should go here</Text>
      </View>
      <View style={styles.menuItemTextContainer}>
        <Text style={{ alignSelf: 'center', padding: 8 }}>{title}</Text>
      </View>
    </Pressable>
  )
}
const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
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
  sectionImage: {
    width: '100%',
    height: '100%',
    backgroundColor: 'blue',
  },
  section: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  scrollView: {
    backgroundColor: 'pink',
    width: '100%',
  },
  text: {
    fontSize: 42,
  },
  menuItem: {
    flex: 1,
    margin: 4,
    borderTopLeftRadius: 60 / 2,
    justifyContent: 'flex-end',
    height: 200,
    minWidth: 150,
    backgroundColor: 'yellow',
    alignItems: 'center',
  },
  menuItemImage: {
    flex: 1,
  },
  menuItemTextContainer: {
    borderColor: 'black',
    borderTopWidth: 1,
    width: '100%',
  },
})
export default Landing
