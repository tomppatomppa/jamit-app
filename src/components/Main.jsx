import { StyleSheet, View } from 'react-native'
import AddButton from './AddButton'
import Map from './Map'

const Main = () => {
  return (
    <View style={styles.container}>
      <Map />
      <AddButton />
    </View>
  )
}
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

export default Main
