import Toast from 'react-native-toast-message'

export const createEnvelope = ({
  latitude = 0,
  longitude = 0,
  latitudeDelta = 0,
  longitudeDelta = 0,
}) => {
  const bottomLeft = {
    latitude: latitude - latitudeDelta / 2,
    longitude: longitude - longitudeDelta / 2,
  }
  const topRight = {
    latitude: latitude + latitudeDelta / 2,
    longitude: longitude + longitudeDelta / 2,
  }
  //In JS, Numbers are stored as double-precision floating-point numbers according to the IEEE 754 standard.
  //Use toString() method to avoid losing decimals
  const envelopeQuery = `${bottomLeft.latitude.toString()},${bottomLeft.longitude.toString()},${topRight.latitude.toString()},${topRight.longitude.toString()}`

  return envelopeQuery
}

export const showToast = ({
  type = 'error',
  text1 = 'Something went wrong',
  error,
}) => {
  Toast.show({
    type: type,
    text1: text1,
    text2: error,
  })
}

export const getDate = (date) => {
  const end = new Date()
  end.setHours(23, 59, 59, 999)
  switch (date) {
    case 'today':
      return getDateDaysFromNow(+1)
    case 'week':
      return getDateDaysFromNow(+8)
    case 'month':
      return getDateDaysFromNow(+32)
    default:
      return ''
  }
}

export const getDateDaysFromNow = (days) => {
  const date = ((d) => new Date(d.setDate(d.getDate() + days)))(new Date())
    .toISOString()
    .slice(0, 10)
  return date
}
