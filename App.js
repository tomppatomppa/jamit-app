import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NativeRouter } from 'react-router-native'
import Main from './src/components/Main'
import AuthStorageContext from './src/contexts/AuthStorageContext'

import AuthStorage from './src/utils/AuthStorage'

const queryClient = new QueryClient()
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
