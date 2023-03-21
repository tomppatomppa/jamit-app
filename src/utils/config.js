import axios from 'axios'
import AuthStorage from './AuthStorage'
import { BASE_URL } from './constants'

const authStorage = new AuthStorage()

export function createAxiosClient({ options, getCurrentAccessToken }) {
  const client = axios.create(options)

  client.interceptors.request.use(
    async (config) => {
      if (config.authorization !== false) {
        const { token } = await getCurrentAccessToken()
        if (token) {
          config.headers.Authorization = 'Bearer ' + token
        }
      }
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )
  client.interceptors.response.use(
    async (response) => {
      if (response.data.token && response.data.username) {
        await setCurrentUser(response.data)
      }

      return response
    },
    (error) => {
      const originalRequest = error.config

      originalRequest.headers = JSON.parse(
        JSON.stringify(originalRequest.headers || {})
      )

      return Promise.reject(error)
    }
  )
  return client
}

async function getCurrentAccessToken() {
  const users = await authStorage.getCurrentUser()
  return users
}
async function setCurrentUser(user) {
  await authStorage.setCurrentUser(user)
}

export const client = createAxiosClient({
  options: {
    baseURL: BASE_URL,
    timeout: 300000,
    headers: {
      'Content-Type': 'application/json',
    },
  },
  getCurrentAccessToken,
})
