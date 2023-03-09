import Constants from 'expo-constants'

const {
  APP_ID,
  SPOTIFY_CLIENT_ID,
  DATABASE_URI,
  DATABASE_URI_DEV,
  ENV,
  BASE_URL,
} = Constants.manifest.extra
console.log(ENV === 'development' ? DATABASE_URI_DEV : DATABASE_URI)
export {
  APP_ID,
  SPOTIFY_CLIENT_ID,
  DATABASE_URI,
  DATABASE_URI_DEV,
  ENV,
  BASE_URL,
}
