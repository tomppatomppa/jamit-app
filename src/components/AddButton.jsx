import { Button, StyleSheet, View } from 'react-native'
import theme from '../theme'

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

const AddButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button color={theme.colors.primary} title="Add" />
    </View>
  )
}

export default AddButton
