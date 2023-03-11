import { client } from '../utils/config'

export const login = async ({ username, password }) => {
  const response = await client.post(
    `/api/login`,
    { username, password },
    { authorization: false }
  )

  return response.data
}

export const logout = async () => {
  const response = await client.delete(`/api/login`, { authorization: true })

  return response.data
}
