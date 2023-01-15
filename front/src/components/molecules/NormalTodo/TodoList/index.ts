import { defineComponent, h, ref, Ref } from "vue";
import type { Item } from "../TodoItem";
import TodoListView from "./TodoListView.vue";

type TodoItems = {
  items: Ref<Item[]>
  changeDone: (index:Item) => void
  remove: (item:Item) => void
}

export const createTodos = (): TodoItems => {
  const items = ref<Item[]>([
    {title:"hoge", id:"key1", description:"you", isDone: false},
    {title:"mine", id:"key2", description:"you", isDone: true},
    {title:"p", id:"key3", description:"you", isDone: false}
  ])
  const changeDone = (item:Item) => {
    const index = items.value.indexOf(item)
    items.value[index].isDone = !items.value[index].isDone
  }
  const remove = (item:Item) => {
    const index = items.value.indexOf(item)
    items.value.splice(index,1)
  }
  return {items, changeDone, remove}
}

export default defineComponent({
  name:"TodoList",
  setup() {
    const {items, changeDone, remove} = createTodos()
    return {
      items:items,
      changeDone,
      remove
    }
  },
  render(){
    return h(TodoListView, {
      items:this.items,
      changeDone:this.changeDone,
      remove:this.remove
    })
  }
})