import axios from 'axios'
import React from 'react'
import { Alert, Button, StyleSheet, View } from 'react-native'
import { useNavigate } from 'react-router-native'
import theme from '../theme'
import { baseUrl, event, token } from '../utils/config'

const CreateEvent = ({ pressedLocation }) => {
  const navigate = useNavigate()
  const handleCreateEvent = async () => {
    const { longitude, latitude } = pressedLocation
    try {
      await axios.post(
        baseUrl,
        {
          ...event,
          post_url: longitude + latitude,
          location: { type: 'Point', coordinates: [latitude, longitude] },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      Alert.alert('Created event')
      navigate(-1)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <View style={styles.container}>
      <Button onPress={() => navigate(-1)} title="Prev"></Button>
      <Button onPress={handleCreateEvent} title="Create"></Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: 74,
    marginBottom: 12,
  },
})
export default CreateEvent
