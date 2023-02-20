import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import axios from 'axios'
import { Pressable, StyleSheet, View } from 'react-native'
import AddButton from './src/components/AddButton'
import Map from './src/components/Map'
const baseUrl = 'http://192.168.1.104:3000/api/events/'
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    width: 74,
    marginBottom: 12,
  },
})
const queryClient = new QueryClient()
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <View style={styles.container}>
        <Map />
        <AddButton />
      </View>
    </QueryClientProvider>
  )
}
