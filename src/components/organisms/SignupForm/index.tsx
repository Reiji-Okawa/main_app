import { useForm } from 'react-hook-form'
import Button from 'components/atoms/Button'
import Input from 'components/atoms/Input'
import Text from 'components/atoms/Text'
import Box from 'components/layout/Box'

export type SignupFormData = {
  username: string
  password: string
}

interface SignupFormProps {
  /**
   * サインインボタンを押した時のイベントハンドラ
   */
  onSignup?: (username: string, password: string) => void
}

/**
 * サインインフォーム
 */
const SignupForm = ({ onSignup }: SignupFormProps) => {
  // React Hook Formの使用
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>()
  const onSubmit = (data: SignupFormData) => {
    const { username, password } = data

    onSignup && onSignup(username, password)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box marginBottom={1}>
        {/* サインインユーザー名の入力 */}
        <Input
          {...register('username', { required: true })}
          name="username"
          type="text"
          placeholder="ユーザ名"
          hasError={!!errors.username}
        />
        {errors.username && (
          <Text color="danger" variant="small" paddingLeft={1}>
            ユーザ名は必須です
          </Text>
        )}
      </Box>
      <Box marginBottom={2}>
        {/* サインインパスワードの入力 */}
        <Input
          {...register('password', { required: true })}
          name="password"
          type="password"
          placeholder="パスワード"
          hasError={!!errors.password}
        />
        {errors.password && (
          <Text color="danger" variant="small" paddingLeft={1}>
            パスワードは必須です
          </Text>
        )}
      </Box>
      <Button width="100%" type="submit">
        サインアップ
      </Button>
    </form>
  )
}

export default SignupForm
