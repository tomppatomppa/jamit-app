export const calculateRectangle = ({
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
