import {Meta, StoryFn} from '@storybook/vue3'
import Text from ".";

type T = typeof Text

export default {
  title: 'Components/atoms/Text',
  component:Text,
} as Meta<T>

const Template: StoryFn<T> = (args) => ({ // TemplateもexportすればStorybookに読み込まれる
  components: {Text},
  setup(){
    return {args}
  },
  template: `<Text v-bind="args" />`
})

export const Primary = Template.bind({})
Primary.args = {text:"text props"}
Primary.storyName = 'Primary' // Storybook上でのこのボタン名を指定する。指定しない場合は関数名になる(Something)
