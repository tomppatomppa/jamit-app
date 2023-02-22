import React from 'react'
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native'
import { useNavigate } from 'react-router-native'
import theme from '../theme'

import Text from './Text'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView stickyHeaderIndices={[0]} style={styles.scrollView}>
        <Text
          style={{
            justifyContent: 'flex-end',
            alignItems: 'center',

            height: 80,
            backgroundColor: 'black',
            padding: 10,
          }}
        >
          Sticky Header
        </Text>
        <Button onPress={() => navigate('/map')} title="press"></Button>
        <View style={{ flexDirection: 'row', height: 300, padding: 12 }}>
          <View style={{ flexBasis: '50%', backgroundColor: 'yellow' }}>
            <Text>asdasd</Text>
          </View>
          <View style={{ flexBasis: '50%', backgroundColor: 'green' }}>
            <Text>asdasd</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: 300, padding: 12 }}>
          <View style={{ flexBasis: '50%', backgroundColor: 'yellow' }}>
            <Text>asdasd</Text>
          </View>
          <View style={{ flexBasis: '50%', backgroundColor: 'green' }}>
            <Text>asdasd</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', height: 300, padding: 12 }}>
          <View style={{ flexBasis: '50%', backgroundColor: 'yellow' }}>
            <Text>asdasd</Text>
          </View>
          <View style={{ flexBasis: '50%', backgroundColor: 'green' }}>
            <Text>asdasd</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  },
  text: {
    fontSize: 42,
  },
})
export default Landing
