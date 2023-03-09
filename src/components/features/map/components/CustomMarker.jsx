import { Marker } from 'react-native-maps'

const CustomMarker = ({ data }) => {
  const { name, id, location, eventCount } = data

  const opacity = eventCount > 0 ? 1 : 0.3

  const setPinColor = () => {
    if (eventCount < 1) return 'red'
    if (eventCount < 2) return 'yellow'
    return 'green'
  }

  return (
    <Marker
      style={{ opacity: opacity }}
      pinColor={setPinColor()}
      title={name}
      identifier={id.toString()}
      coordinate={{
        latitude: location.coordinates[0],
        longitude: location.coordinates[1],
      }}
    />
  )
}

export default CustomMarker
