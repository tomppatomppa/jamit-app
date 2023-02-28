import Toast from 'react-native-toast-message'

export const calculateArea = ({
  latitude,
  longitude,
  latitudeDelta,
  longitudeDelta,
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
  const recDimensions = {
    xmin: bottomLeft.latitude.toString(),
    ymin: bottomLeft.longitude.toString(),
    xmax: topRight.latitude.toString(),
    ymax: topRight.longitude.toString(),
  }

  return recDimensions
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
      return getDateDaysFromNow(+3)
    case 'week':
      return getDateDaysFromNow(+8)
    // case 'month':
    //   end.setDate(+30)
    //   return end.getTime()
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
