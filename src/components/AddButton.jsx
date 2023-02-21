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
    marginBottom: 12,
  },
})

const AddButton = () => {
  return (
    <View style={styles.buttonContainer}>
      <Button color={theme.colors.primary} title="logo Show list" />
    </View>
  )
}

export default AddButton
