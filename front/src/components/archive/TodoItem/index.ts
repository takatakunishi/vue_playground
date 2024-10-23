import { defineComponent, h, mergeProps, PropType, Ref } from "vue"
import TodoItemView from "./TodoItemView.vue"

export type Item = {
  title: string,
  description: string,
  isDone: boolean
}

export default defineComponent({
  name: 'TodoItem',
  props: {
    item: {
      type: Object as PropType<Item>,
      required: true
    },
    changeDone: {
      type: Function as PropType<() => void>,
      required: true
    }
  },
  setup(props) {
    return {
      item: props.item,
      chengeDone: props.changeDone
    }
  },
  render() {
    return h(TodoItemView, {
      item: this.item,
      chengeDone: this.chengeDone
    })
  }
})