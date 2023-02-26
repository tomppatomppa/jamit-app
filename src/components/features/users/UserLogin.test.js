import { fireEvent, render, waitFor } from '@testing-library/react-native'
import { UserLoginContainer } from './UserLogin'

describe('LoginForm', () => {
  describe('UserLoginContainer', () => {
    it('calls provided onSubmit function when pressing submit button', async () => {
      const onSubmit = jest.fn()
      const { getByPlaceholderText, getByText } = render(
        <UserLoginContainer onSubmit={onSubmit} />
      )

      fireEvent.changeText(getByPlaceholderText('Username'), 'tomi@hotmail.com')
      fireEvent.changeText(getByPlaceholderText('Password'), 'password')

      fireEvent.press(getByText('Sign In'))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'tomi@hotmail.com',
          password: 'password',
        })
      })
    })

    it('should  call provided onCancel function', async () => {
      const onCancel = jest.fn()
      const { getByText } = render(<UserLoginContainer onCancel={onCancel} />)

      fireEvent.press(getByText('Cancel'))

      await waitFor(() => {
        expect(onCancel).toHaveBeenCalledTimes(1)
      })
    })
    it('should  call provided navigate hook', async () => {
      const navigate = jest.fn()
      const { getByText } = render(<UserLoginContainer navigate={navigate} />)

      fireEvent.press(getByText('Register a new account'))

      expect(getByText('Register a new account')).toBeTruthy()

      await waitFor(() => {
        expect(navigate).toHaveBeenCalledTimes(1)
      })
    })
  })
})
