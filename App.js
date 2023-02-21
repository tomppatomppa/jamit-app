import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { NativeRouter } from 'react-router-native'

import Main from './src/components/Main'

const queryClient = new QueryClient()

export default function App() {
  return (
    <NativeRouter>
      <QueryClientProvider client={queryClient}>
        <Main />
      </QueryClientProvider>
    </NativeRouter>
  )
}
