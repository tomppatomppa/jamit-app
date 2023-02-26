import { render } from '@testing-library/react-native'
import { StyleSheet } from 'react-native'
import theme from '../theme'
import Text from './Text'

const styles = StyleSheet.create({
  errorText: {
    marginBottom: 24,
    color: theme.colors.warning,
  },
  errorInput: {
    padding: 6,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: theme.colors.warning,
    borderRadius: 3,
    marginBottom: 6,
  },
})
import TextInput from './TextInput'

describe('<FormikTextInput', () => {
  it('should show correct value for name', async () => {
    const { getByTestId } = render(<TextInput value="tomi" />)

    const input = getByTestId('text-input')

    expect(input.props.value).toBe('tomi')
  })
  it('Textinput uses style prop if error={true}', async () => {
    const { getByTestId } = render(
      <TextInput value="" error={true} style={styles.errorInput} />
    )
    const input = getByTestId('text-input')

    expect(input.props.style).toBe(styles.errorInput)
  })
  it('Textinput uses default style even if style prop is passed, but error={false}', async () => {
    const { getByTestId } = render(
      <TextInput value="" error={false} style={styles.errorInput} />
    )
    const input = getByTestId('text-input')

    expect(input.props.style).not.toBe(styles.errorInput)
  })
  it('Display error text', async () => {
    const { getByText } = render(
      <TextInput value="" error={true} style={styles.errorInput}>
        <Text style={styles.errorText}>{'Required'}</Text>
      </TextInput>
    )
    const errorText = getByText('Required')

    expect(errorText).toBeTruthy()
  })
})
