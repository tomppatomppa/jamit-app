import { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'

import { Text } from '../../../common'
import Checkbox from '../../../common/CheckBox'
import useBookmarks from '../hooks/useBookmarks'
import useDeleteBookmark from '../hooks/useDeleteBookmark'
import BookmarkItem from './BookmarkItem'

const Bookmarks = () => {
  const [select, setSelect] = useState([])
  const { bookmarks } = useBookmarks()
  const { deleteBookmark } = useDeleteBookmark()

  const handleDelete = (id) => {
    Alert.alert(
      'Delete bookmark?',
      'Are you sure you want to delete this bookmark?',
      [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        { text: 'YES', onPress: () => deleteBookmark(id) },
      ]
    )
  }
  const handleSelectAll = (value) => {
    console.log('select all', value)
  }
  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'flex-start' }}>
        <Checkbox label={'select all'} onChecked={handleSelectAll} />
      </View>
      <Text>Bookmarks</Text>
      {bookmarks?.map((bookmark, index) => (
        <BookmarkItem key={index} bookmark={bookmark} onDelete={handleDelete} />
      ))}
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    padding: 10,
  },
})

export default Bookmarks
