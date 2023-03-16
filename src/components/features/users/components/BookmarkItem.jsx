import React from 'react'
import { StyleSheet, View } from 'react-native'
import { AntDesign } from '../../../../assets/images/icons'
import { Text } from '../../../common'

const BookmarkItem = ({ bookmark, onDelete }) => {
  const { bookmark_reference, table_reference } = bookmark
  return (
    <View style={styles.container}>
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
  },
  bookmarkContainer: {
    justifyContent: 'center',
    display: 'flex',
    padding: 2,
    borderWidth: 1,
    borderColor: 'black',
  },
  deleteIcon: { alignSelf: 'center' },
})
export default BookmarkItem
