import React from 'react'
import { Pressable, StyleSheet } from 'react-native'
import theme from '../../theme'

const CustomButton = ({ warning = false, onPress, children, style }) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        warning
          ? { ...styles.buttonWarning, ...style }
          : { ...styles.button, ...style },
      ]}
    >
      {children}
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.secondaryLight,
    borderWidth: 1,
    borderColor: 'black',
    padding: 7,
    borderRadius: 10,
    minWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '5px 0 30px rgba(1,41,112,0.08)',
  },
  buttonWarning: {
    backgroundColor: theme.colors.warning,
    borderWidth: 1,
    borderColor: 'black',
    padding: 7,
    borderRadius: 10,
    minWidth: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
