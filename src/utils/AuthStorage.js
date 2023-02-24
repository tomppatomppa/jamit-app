import AsyncStorage from '@react-native-async-storage/async-storage'

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace
  }

  async getCurrentUser() {
    const currentUser = await AsyncStorage.getItem(
      `${this.namespace}:currentUser`
    )
    return currentUser ? JSON.parse(currentUser) : ''
  }

  async setCurrentUser(accessToken) {
    await AsyncStorage.setItem(
      `${this.namespace}:currentUser`,
      JSON.stringify(accessToken)
    )
  }

  async removeCurrentUser() {
    await AsyncStorage.removeItem(`${this.namespace}:currentUser`)
  }
}

export default AuthStorage
