import { useEffect, useState } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Text from './Text'

const Checkbox = ({ label, onChecked, isChecked }) => {
  const [checked, setChecked] = useState(false)

  const handlePress = () => {
    setChecked(!checked)
  }
  useEffect(() => {
    if (onChecked) {
      onChecked(checked)
    }
  }, [checked])

  useEffect(() => {
    setChecked(isChecked)
  }, [isChecked])
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={{ marginRight: 6 }}>{label}</Text>
      <TouchableOpacity
        onPress={handlePress}
        style={[
          styles.checkbox,
          { backgroundColor: checked ? '#00c853' : 'transparent' },
          { borderColor: checked ? '#00c853' : '#757575' },
        ]}
      >
        {checked ? <Text style={styles.checkmark}>✓</Text> : null}
      </TouchableOpacity>
    </View>
  )
}
export default Checkbox
const styles = StyleSheet.create({
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkmark: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
})
