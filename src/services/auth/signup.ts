// typesは後ほど定義
import { ApiContext, User } from 'types'
// 先ほど定義したsrc/utils/index.tsから読み込み
import { fetcher } from 'utils'

export type SignupParams = {
  /**
   * ユーザー名
   * サンプルユーザーのユーザー名は "user"
   */
  username: string
  /**
   * パスワード
   * サンプルユーザーのパスワードは "password"
   */
  password: string
}

/**
 * 認証API（サインイン）
 * @param context APIコンテキスト
 * @param params パラメータ
 * @returns ログインユーザー
 */
const signup = async (
  context: ApiContext,
  params: SignupParams,
): Promise<User> => {
  return await fetcher(
    `${context.apiRootUrl.replace(/\/$/g, '')}/auth/signup`,
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params),
    },
  )
}

export default signup
