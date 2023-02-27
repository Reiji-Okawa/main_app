import { ComponentMeta, ComponentStory } from '@storybook/react'
import SignupForm from './index'

export default {
  title: 'Organisms/SignupForm',
  argTypes: {
    onSignup: {
      description: 'サインインボタンを押した時のイベントハンドラ',
      table: {
        type: { summary: 'function' },
      },
    },
  },
} as ComponentMeta<typeof SignupForm>

const Template: ComponentStory<typeof SignupForm> = (args) => (
  <SignupForm {...args} />
)
export const Form = Template.bind({})
