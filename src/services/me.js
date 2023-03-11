import { client } from '../utils/config'

export const update = async (values) => {
  const response = await client.put(
    `/api/me`,
    { ...values },
    { authorization: true }
  )
  return response.data
}
