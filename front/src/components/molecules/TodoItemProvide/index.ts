import { defineComponent, h, PropType } from "vue"
import { useTodoStore } from "../TodoListProvide"
import TodoItemViewProvide from "./TodoItemViewProvide.vue"

export type Item = {
  title:string,
  description:string,
  isDone:boolean,
  id:string
}

export default defineComponent({
  name: 'TodoItemProvide',
  props: {
    item:{
      type: Object as PropType<Item>,
      required: true
    },
  },
  setup(props) {
    const {actons} = useTodoStore()
    const changeDone = () => {
      actons.changeDone(props.item)
    }
    const remove = () => {
      actons.remove(props.item)
    }
    return {
      item:props.item,
      changeDone,
      remove
    }
  },
  render(){
    return h(TodoItemViewProvide, {
      item: this.item,
      changeDone:this.changeDone,
      remove:this.remove
    })
  }
})