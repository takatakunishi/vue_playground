import {Meta, StoryFn} from '@storybook/vue3'
import Button from "./Button";

type T = typeof Button

export default {
  title: 'Components/Atoms/Button',
  component:Button,
  argTypes: {
    click: {
      table: { // Storyのパラメーター設定からclickの表記を消す
        disable: true
      },
      action:'click'
    }
  }
} as Meta<T>

const Template: StoryFn<T> = (args) => ({
  components: {Button},
  setup(){
    return {args}
  },
  template: `<Button v-bind="args" />`
})

export const Primary = Template.bind({})
Primary.args = {label:'main'}
Primary.storyName = 'メインボタン' // Storybook上でのこのボタン名を指定する。指定しない場合は関数名になる(この場合はPrimary)

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  label:"second"
}