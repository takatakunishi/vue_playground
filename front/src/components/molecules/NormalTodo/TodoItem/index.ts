import { defineComponent, h, PropType } from "vue"
import TodoItemView from "./TodoItemView.vue"

export type Item = {
  title:string,
  id:string
  description:string,
  isDone:boolean
}

export default defineComponent({
  name: 'TodoItem',
  props: {
    item:{
      type: Object as PropType<Item>,
      required: true
    },
    changeDone: {
      type: Function as PropType<() => void>,
      required: true
    },
    remove: {
      type: Function as PropType<() => void>,
      required: true
    },
  },
  setup(props) {
    return {
      item:props.item,
    }
  },
  render(){
    return h(TodoItemView, {
      item: this.item,
      changeDone:this.$props.changeDone,
      remove:this.$props.remove
    })
  }
})