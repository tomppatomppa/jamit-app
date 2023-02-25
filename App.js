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
    onError: (error, mutation) => {
      console.log(mutation)
      console.log(error.response.data.error)
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
