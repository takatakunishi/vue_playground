import { defineComponent, h, PropType, ref, reactive, Ref, toRefs, toRef } from "vue";
import type { Item } from "../TodoItemTwo";
import TodoListTwoView from "./TodoListTwoView.vue";

type TodoItems = {
  items: Ref<Item[]>
  changeDone: (item:Item) => void
  // remove: (item:Item) => void
}

const createTodos = (): TodoItems => {
  const items = ref<Item[]>([{title:"hoge", description:"you", isDone: false},{title:"mine", description:"you", isDone: true},{title:"p", description:"you", isDone: false},])
  const changeDone = (item:Item) => {
    const index = items.value.indexOf(item)
    items.value[index].isDone = !items.value[index].isDone
  }
  return {items, changeDone}
}

export default defineComponent({
  name:"TodoListTwo",
  setup() {
    const {items, changeDone} = createTodos()
    return {
      items:items.value,
      changeDone
    }
  },
  render(){
    return h(TodoListTwoView, {
      items:this.items,
      changeDone:this.changeDone
    })
  }
})