import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../../../../theme'
import Tab from '../../../Tab'

const TopBar = () => {
  return (
    <View style={styles.container}>
      <Tab navigateTo={'/'} title={'back'} />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 80,
    backgroundColor: theme.colors.primary,
  },
})
export default TopBar
