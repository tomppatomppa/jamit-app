import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'

import AuthStorageContext from './src/contexts/AuthStorageContext'
import AuthStorage from './src/utils/AuthStorage'
import Toast from 'react-native-toast-message'

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
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: (data, query) => {
      console.log(query.queryKey)
    },
    onError: (error, query) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        console.log(`Something went wrong: ${error.message}`)
      }
      console.log(query)
      console.log(error)
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      showToast({ error: error.response.data.error })
    },
  }),
})
const authStorage = new AuthStorage()

export default function App() {
  return (
    <NativeRouter>
      <QueryClientProvider client={queryClient}>
        <AuthStorageContext.Provider value={authStorage}>
          <Main />
          <Toast />
        </AuthStorageContext.Provider>
      </QueryClientProvider>
    </NativeRouter>
  )
}
