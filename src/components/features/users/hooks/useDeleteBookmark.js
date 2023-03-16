import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteBookmark } from '../../../../services/bookmarks'

const useDeleteBookmark = () => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation((id) => deleteBookmark(id), {
    onSuccess: () => {
      queryClient.refetchQueries(['bookmarks'])
    },
  })
  return { deleteBookmark: mutate }
}

export default useDeleteBookmark
