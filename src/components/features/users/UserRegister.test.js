import { fireEvent, render, waitFor } from '@testing-library/react-native'
import theme from '../../../theme'

import { UserRegisterContainer } from './UserRegister'

describe('UserRegister', () => {
  describe('UserRegisterContainer', () => {
    it('calls provided onSubmit function when pressing submit button', async () => {
      const onSubmit = jest.fn()
      const { getByPlaceholderText, getByText } = render(
        <UserRegisterContainer onSubmit={onSubmit} />
      )

      fireEvent.changeText(getByPlaceholderText('Username'), 'tomi@hotmail.com')
      fireEvent.changeText(getByPlaceholderText('Password'), 'password')
      fireEvent.changeText(getByPlaceholderText('Confirm password'), 'password')

      fireEvent.press(getByText('Register'))

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(1)

        expect(onSubmit.mock.calls[0][0]).toEqual({
          username: 'tomi@hotmail.com',
          password: 'password',
          passwordConfirm: 'password',
        })
      })
    })
    it('calls provided onCancel function when pressing cancel button', async () => {
      const onCancel = jest.fn()
      const { getByText } = render(
        <UserRegisterContainer onCancel={onCancel} />
      )

      fireEvent.press(getByText('Cancel'))

      await waitFor(() => {
        expect(onCancel).toHaveBeenCalledTimes(1)
      })
    })
    it('Empty username field causes red borders on textfield in onSubmit is pressed', async () => {
      const onSubmit = jest.fn()
      const { getByPlaceholderText, getByText } = render(
        <UserRegisterContainer onSubmit={onSubmit} />
      )

      fireEvent.changeText(getByPlaceholderText('Username'), '')
      fireEvent.changeText(getByPlaceholderText('Password'), 'password')
      fireEvent.changeText(getByPlaceholderText('Confirm password'), 'password')

      fireEvent.press(getByText('Register'))

      const usernameInput = getByPlaceholderText('Username')

      await waitFor(() => {
        expect(onSubmit).toHaveBeenCalledTimes(0)
        expect(usernameInput.props.style.borderColor).toBe(theme.colors.warning)
      })
    })
  })
})
