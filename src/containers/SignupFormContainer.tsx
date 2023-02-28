import SignupForm from 'components/organisms/SignupForm'
import { useAuthContext } from 'contexts/AuthContext'
import { useGlobalSpinnerActionsContext } from 'contexts/GlobalSpinnerContext'

interface SignupFormContainerProps {
  /**
   * サインインした時に呼ばれるイベントハンドラ
   */
  onSignup: (error?: Error) => void
}

/**
 * サインインフォームコンテナ
 */
const SignupFormContainer = ({ onSignup }: SignupFormContainerProps) => {
  const { signup } = useAuthContext()
  const setGlobalSpinner = useGlobalSpinnerActionsContext()
  // サインインボタンを押された時のイベントハンドラ
  const handleSignup = async (username: string, password: string) => {
    try {
      // ローディングスピナーを表示する
      setGlobalSpinner(true)
      console.log('signUP');
      await signup(username, password)
      onSignup && onSignup()
    } catch (err: unknown) {
      if (err instanceof Error) {
        // エラーの内容を表示
        window.alert(err.message)
        onSignup && onSignup(err)
      }
    } finally {
      setGlobalSpinner(false)
    }
  }

  return <SignupForm onSignup={handleSignup} />
}

export default SignupFormContainer
