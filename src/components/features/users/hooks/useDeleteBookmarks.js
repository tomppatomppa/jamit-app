import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBookmarks } from '../../../../services/bookmarks'

const useDeleteBookmarks = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation((ids) => deleteBookmarks(ids), {
    onSuccess: () => {
      queryClient.refetchQueries(['bookmarks'])
    },
  })

  return { deleteBookmarks: mutate }
}

export default useDeleteBookmarks
