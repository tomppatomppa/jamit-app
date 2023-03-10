import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import theme from '../theme'
import { Ionicons } from '@expo/vector-icons'
import { useNavigate } from 'react-router-native'

const Navbar = ({ children }) => {
  const navigate = useNavigate()
  return (
    <View style={styles.stickyHeader}>
      <Pressable
        style={{ position: 'absolute', left: 0, bottom: 10 }}
        onPress={() => navigate('/')}
      >
        <Ionicons name="chevron-back" size={24} color="black" />
      </Pressable>
      <View style={styles.headerMenuContainer}>{children}</View>
    </View>
  )
}

export default Navbar
const styles = StyleSheet.create({
  stickyHeader: {
    justifyContent: 'center',
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
})
