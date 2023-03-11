/* eslint-disable no-unused-vars */
import axios from 'axios'
import AuthStorage from './AuthStorage'

import { BASE_URL } from './constants'
const authStorage = new AuthStorage() //TODO: remove duplicate context

export function createAxiosClient({
  options,
  getCurrentAccessToken,
  getCurrentRefreshToken,
  refreshTokenUrl,
  logout,
  setRefreshedTokens,
}) {
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

  return client
}

async function getCurrentAccessToken() {
  const users = await authStorage.getCurrentUser()
  return users
}

function getCurrentRefreshToken() {
  return null
}

function setRefreshedTokens(tokens) {
  console.log('set tokens...')
}

async function logout() {
  console.log('logout...')
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
  getCurrentRefreshToken,
  refreshTokenUrl: '',
  logout,
  setRefreshedTokens,
})
