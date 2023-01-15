import {Meta, StoryFn} from '@storybook/vue3'
import TodoList, {createTodos} from "./"
import TodoListViewVue from './TodoListView.vue'

type T = typeof TodoListViewVue

export default {
  title: 'Components/Molecules/TodoList',
  component:TodoListViewVue,
  argTypes: {
    item: {
      table: {
        disable:true
      }
    },
    changeDone: {
      table: { // Storyのパラメーター設定からchangeDoneの表記を消す
        disable: true
      },
      action:true
    },
    remove: {
      table: { // Storyのパラメーター設定からremoveの表記を消す
        disable: true
      },
      action:true
    }
  }
} as Meta<T>

export const Template: StoryFn<T> = (args) => {
  const {items, changeDone, remove} = createTodos()
  return {
    components: {TodoListViewVue},
    setup(){
      return {...args, items, changeDone, remove}
    },
    template: `<TodoListViewVue v-bind="args" :items="items" :changeDone="changeDone" :remove="remove"/>`
  }
}