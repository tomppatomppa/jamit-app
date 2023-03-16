import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AntDesign } from '../../../../assets/images/icons'
import { Text } from '../../../common'
import Checkbox from '../../../common/CheckBox'

const BookmarkItem = ({ bookmark, onDelete, select }) => {
  const { bookmark_reference, table_reference } = bookmark

  const isSelected = select?.includes(bookmark_reference)

  return (
    <View style={styles.container}>
      <Checkbox isChecked={isSelected} />
      <View style={styles.bookmarkContainer}>
        <Text>type: {table_reference}</Text>
        <Text>{bookmark_reference}</Text>
      </View>
      <AntDesign
        onPress={() => onDelete(bookmark_reference)}
        style={styles.deleteIcon}
        name="delete"
        size={24}
        color="black"
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
  },
  bookmarkContainer: {
    justifyContent: 'center',
    display: 'flex',
    padding: 2,
    borderWidth: 1,
    borderColor: 'black',
    flex: 1,
  },
  deleteIcon: { alignSelf: 'center' },
})
export default BookmarkItem
