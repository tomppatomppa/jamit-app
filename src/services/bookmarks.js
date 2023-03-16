import { client } from '../utils/config'

const getBookmarks = async () => {
  const response = await client.get(`/api/bookmarks`, { authorization: true })
  return response.data
}
const deleteBookmark = async (id) => {
  const response = await client.delete(`/api/bookmarks/${id}`, {
    authorization: true,
  })
  return response.data
}

export { getBookmarks, deleteBookmark }
