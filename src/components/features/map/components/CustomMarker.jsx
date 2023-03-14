import { StyleSheet } from 'react-native'
import { Marker } from 'react-native-maps'
import { getPinColor } from '../config'

const CustomMarker = ({ data }) => {
  const { name, id, location, eventCount } = data

  return (
    <Marker
      style={[eventCount <= 0 ? styles.emptyPin : styles.normalPin]}
      pinColor={getPinColor(eventCount)}
      title={name}
      identifier={id.toString()}
      coordinate={{
        latitude: location.coordinates[0],
        longitude: location.coordinates[1],
      }}
    />
  )
}

const styles = StyleSheet.create({
  normalPin: {
    opacity: 1,
  },
  emptyPin: {
    opacity: 0.3,
  },
})

export default CustomMarker
