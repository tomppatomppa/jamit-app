import React from 'react'
import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import theme from '../theme'

import { AntDesign, FontAwesome } from '@expo/vector-icons'
import { useNavigate } from 'react-router-native'
import useCurrentUser from '../hooks/useCurrentUser'
import { CustomButton, Text } from './common'

const menuCategories = [
  { title: 'Jamit', description: 'Show Jamit' },
  { title: 'Open Mic', description: 'Show Open Mic' },
]

const Home = () => {
  const { currentUser } = useCurrentUser()
  const navigate = useNavigate()

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollView}>
        <View style={styles.stickyHeader}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <CustomButton onPress={() => console.log('Menu')}>
              <Text>Menu</Text>
            </CustomButton>
            <Text fontWeight={'bold'} style={{ flex: 1, marginLeft: 12 }}>
              JAMIT
            </Text>
            {currentUser ? (
              <User />
            ) : (
              <CustomButton onPress={() => navigate('/login')}>
                <Text>Login</Text>
              </CustomButton>
            )}
          </View>
        </View>
        <View style={{ marginVertical: 20, alignItems: 'center' }}>
          <Image
            style={styles.backgroundImage}
            source={require('../assets/images/HomeBackground.jpg')}
          ></Image>
        </View>
        <View style={styles.infoLabel}>
          <Text>Find your next jam session</Text>
        </View>
        <View style={{ padding: 12 }}>
          <Text
            style={styles.sectionHeader}
            fontSize={'subheading'}
            fontWeight={'bold'}
          >
            Tapahtumat
          </Text>
          <View
            style={{
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}
          >
            {menuCategories.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const User = () => {
  const navigate = useNavigate()
  return (
    <Pressable onPress={() => navigate('/settings')} style={styles.userButton}>
      <AntDesign name="user" size={24} color="black" />
    </Pressable>
  )
}
const MenuItem = ({ item }) => {
  const navigate = useNavigate()
  return (
    <Pressable style={styles.menuItem} onPress={() => navigate('/map')}>
      <FontAwesome
        style={{ marginTop: 20 }}
        name="music"
        size={48}
        color="black"
      />
      <View style={styles.menuItemImage}>
        <Text>{item.description}</Text>
      </View>
      <View style={styles.menuItemTextContainer}>
        <Text style={{ alignSelf: 'center', padding: 8 }}>{item.title}</Text>
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
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
  backgroundImage: { width: '90%', borderRadius: 10 },
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

  section: {
    display: 'flex',
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
  },
  scrollView: {
    backgroundColor: theme.colors.secondary,
    width: '100%',
  },
  text: {
    fontSize: 42,
  },
  menuItem: {
    flex: 1,
    margin: 4,
    borderWidth: 1,

    borderRadius: 60 / 2,
    height: 200,
    minWidth: 150,
    backgroundColor: theme.colors.secondaryLight,
    alignItems: 'center',
  },
  menuItemImage: {
    margin: 12,
    flex: 1,
  },
  menuItemTextContainer: {
    borderColor: 'black',
    borderTopWidth: 1,
    width: '100%',
  },
  sectionHeader: { alignSelf: 'center' },
  infoLabel: {
    backgroundColor: theme.colors.secondaryLight,
    width: '70%',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 12,
    bottom: 40,
    borderRadius: 10,
    borderWidth: 1,
  },
  userButton: {
    borderWidth: 1,
    borderColor: 'black',
    padding: 4,
    borderRadius: 10,
    backgroundColor: theme.colors.complementary,
  },
})
export default Home
