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

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error, query) => {
      // 🎉 only show error toasts if we already have data in the cache
      // which indicates a failed background update
      if (query.state.data !== undefined) {
        console.log(`Something went wrong: ${error.message}`)
      }

      console.log(error)
    },
  }),
  mutationCache: new MutationCache({
    onError: (error) => {
      console.log(error)
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
        </AuthStorageContext.Provider>
      </QueryClientProvider>
    </NativeRouter>
  )
}
