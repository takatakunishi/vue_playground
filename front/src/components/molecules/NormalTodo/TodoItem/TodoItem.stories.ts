import {Meta, StoryFn} from '@storybook/vue3'
import { Item } from '.';
import TodoItem from "./TodoItemView.vue";

type T = typeof TodoItem

const data:{[key:string]: Item} = {
  todo:{title:"タイトル", id:"key1", description:"user1", isDone: true},
  done:{title:"タイトル", id:"key1", description:"user1", isDone: false}
}

export default {
  title: 'Components/Molecules/TodoItem',
  component:TodoItem,
  argTypes: {
    item: {
      options: Object.keys(data),
      mapping: data
    },
    changeDone: {
      table: { // Storyのパラメーター設定からclickの表記を消す
        disable: true
      },
      action:true
    },
    remove: {
      table: { // Storyのパラメーター設定からclickの表記を消す
        disable: true
      },
      action:true
    }
  }
} as Meta<T>

const Template: StoryFn<T> = (args) => ({
  components: {TodoItem},
  setup(){
    return {args}
  },
  template: `<TodoItem v-bind="args" />`
})

export const Todo = Template.bind({})
Todo.args = {item:data.todo}
Todo.storyName = '完了' // Storybook上でのこのボタン名を指定する。指定しない場合は関数名になる(Todo)

export const Done = Template.bind({})
Done.args = {item:data.done}
Done.storyName = '未完了' // Storybook上でのこのボタン名を指定する。指定しない場合は関数名になる(Done)