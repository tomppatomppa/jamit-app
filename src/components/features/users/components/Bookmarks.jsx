import { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { AntDesign } from '../../../../assets/images/icons'

import { Text } from '../../../common'
import Checkbox from '../../../common/CheckBox'
import useBookmarks from '../hooks/useBookmarks'
import useDeleteBookmark from '../hooks/useDeleteBookmark'
import useDeleteBookmarks from '../hooks/useDeleteBookmarks'
import BookmarkItem from './BookmarkItem'

const Bookmarks = () => {
  const [select, setSelect] = useState([])
  const { bookmarks } = useBookmarks()
  const { deleteBookmark } = useDeleteBookmark()
  const { deleteBookmarks } = useDeleteBookmarks()

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

  const handleDeleteMany = (arrayIds) => {
    deleteBookmarks(arrayIds)
  }
  const handleSelectAll = (value) => {
    if (value === true) {
      setSelect(bookmarks.map((b) => b.bookmark_reference))
    } else {
      setSelect([])
    }
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
        }}
      >
        <View style={{ flex: 1 }}>
          <Checkbox label={'select all'} onChecked={handleSelectAll} />
        </View>

        <Text style={[select.length ? styles.select : styles.selectNone]}>
          Delete all
          <AntDesign
            onPress={() => handleDeleteMany(select)}
            name="delete"
            size={24}
            color="black"
          />
        </Text>
      </View>
      <Text>Bookmarks</Text>
      {bookmarks?.map((bookmark, index) => (
        <BookmarkItem
          select={select}
          key={index}
          bookmark={bookmark}
          onDelete={handleDelete}
        />
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
  selectNone: {
    display: 'none',
  },
  select: {
    display: 'flex',

    padding: 2,
    alignSelf: 'center',
  },
})

export default Bookmarks
