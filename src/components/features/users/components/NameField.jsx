import React, { useState } from 'react'
import { Pressable, StyleSheet, TextInput, View } from 'react-native'
import { Text } from '../../../common'
import useUpdate from '../hooks/useUpdate'

const NameField = ({ initialName }) => {
  const [edit, setEdit] = useState(false)
  const [name, setName] = useState(initialName || '')

  const { mutate } = useUpdate()

  const handleUpdateName = () => {
    if (name !== initialName) {
      mutate({ name: name })
    }
    setEdit(false)
  }

  return (
    <View style={styles.divider}>
      {edit ? (
        <Pressable onPress={handleUpdateName}>
          <Text style={styles.buttonStyle}>save</Text>
        </Pressable>
      ) : (
        <Pressable onPress={() => setEdit(true)}>
          <Text style={styles.buttonStyle}>edit</Text>
        </Pressable>
      )}
      <Text fontSize="small" fontWeight="bold">
        name
      </Text>
      <TextInput
        onBlur={handleUpdateName}
        value={name}
        onChangeText={(text) => setName(text)}
        editable={edit}
        style={[edit ? styles.textEditStyle : styles.textStyle]}
      />
    </View>
  )
}

export default NameField

const styles = StyleSheet.create({
  textStyle: {
    marginTop: 2,
    marginBottom: 20,
    backgroundColor: '#f4f4f4',
    color: 'black',
  },
  textEditStyle: {
    marginTop: 2,
    marginBottom: 20,
    fontSize: 20,
    color: 'green',
  },
  buttonStyle: {
    alignSelf: 'flex-end',
    position: 'relative',
  },
})
