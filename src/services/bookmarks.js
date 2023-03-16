import { client } from '../utils/config'

const addBookmark = async (data) => {
  const response = await client.post(`/api/bookmarks`, data, {
    authorization: true,
  })
  return response.data
}

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
const deleteBookmarks = async (ids) => {
  console.log(ids)
  const response = await client.delete(
    `/api/bookmarks/?ids=${ids}`,

    {
      authorization: true,
    }
  )
  return response.data
}

export { getBookmarks, deleteBookmark, deleteBookmarks, addBookmark }
