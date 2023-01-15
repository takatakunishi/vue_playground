---
to: "<%= require_storybook ? `src/components/${atomic}/${component_name}/${component_name}.stories.ts` : null %>"
---

import {Meta, StoryFn} from '@storybook/vue3'
import <%= component_name %> from "./<%= component_name %>View.vue";

type T = typeof <%= component_name %>

// const data:{[key:string]: Type} = { // Type = {propsName:string}
//   propsPatternA:{propsName:"propsValue"},
//   propsPatternB:{propsName:"propsValue"}
// }

export default {
  title: 'Components/<%= atomic %>/<%= component_name %>',
  component:<%= component_name %>,
  argTypes: {
    // propsName: { // propsを特定の形で触ってもらいたい場合
    //   options: Object.keys(data),
    //   mapping: data
    // },
    // functionName: {
    //   table: { // Storyのパラメーター設定からchangeDoneの表記を消す
    //     disable: true
    //   },
    //   action:true // actionをtrueにすることで関数が呼ばれたときにaddonのactionに関数名が表示される
    // },
  }
} as Meta<T>

const Template: StoryFn<T> = (args) => ({ // TemplateもexportすればStorybookに読み込まれる
  components: {<%= component_name %>},
  setup(){
    return {args}
    // // 外部のデータをimport、あるいはデータを定義する必要がある場合
    // const {someProps, someFunction} = createTodos()
    // return {...args, someProps, someFunction}
  },
  template: `<<%= component_name %> v-bind="args" />`
  // template: `<<%= component_name %> v-bind="args" :someProps="someProps" :someFunction="someFunction" />`
})

export const Primary = Template.bind({})
Primary.args = { /* コンポーネントに必要なpropsのデフォルト値を記述 */}
Primary.storyName = 'Something' // Storybook上でのこのボタン名を指定する。指定しない場合は関数名になる(Something)

// export const A = Template.bind({})
// A.args = {propsName:data.propsPatternA}
// A.storyName = 'A' // Storybook上でのこのボタン名を指定する。指定しない場合は関数名になる(A)

// export const B = Template.bind({})
// B.args = {propsName:data.propsPatternB}
// B.storyName = 'B' // Storybook上でのこのボタン名を指定する。指定しない場合は関数名になる(B)