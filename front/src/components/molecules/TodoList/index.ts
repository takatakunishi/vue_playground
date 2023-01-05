import { defineComponent, h, PropType, ref, reactive, Ref } from "vue";
import type { Item } from "../TodoItem";
import TodoListViewVue from "./TodoListView.vue";

type TodoItems = {
  items: Ref<Item[]>
  chengeDone: (item:Item) => void
  // remove: (item:Item) => void
}

const createTodos = (): TodoItems => {
  const items = ref<Item[]>([])
  const chengeDone = (item:Item) => {
    const index = items.value.indexOf(item)

  }
  return {items, chengeDone}
}

export default defineComponent({
  name:"TodoList",
  setup() {
    const items = ref<Item[]>([
      {
        title:'hoged',
        description:'des',
        isDone: ref<boolean>(true)
      },
      {
        title:'hoged2',
        description:'de2s',
        isDone: ref<boolean>(false)
      }
    ])
    
    return {
      items: items
    }
  },
  render(){
    return h(TodoListViewVue, {
      items:this.items
    })
  }
})