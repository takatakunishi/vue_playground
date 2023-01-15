import { defineComponent, h, ref, provide, InjectionKey, inject } from "vue";
import type { Item } from "../TodoItemProvide";
import TodoListViewProvide from "./TodoListViewProvide.vue";

type TodoStoreType = ReturnType<typeof todoStore>

// InjectionKey型のProvide/InjectionKeyを生成することで、Injectで受け取る値で型推論が効くようになる。
// InjectionKeyはSymbol型を継承しているためこの書き方になる。(Symbol型にすることで同一値の生成を防げる)
const todoStoreKey: InjectionKey<TodoStoreType> = Symbol('todoStore')

const todoStore = () => {
  const store = ref<Item[]>([
    {title:"hoge", id:"key1", description:"you", isDone: false},
    {title:"mine", id:"key2", description:"you", isDone: true},
    {title:"p", id:"key3", description:"you", isDone: false}
  ])
  const changeDone = (item:Item) => {
    const index = store.value.indexOf(item)
    store.value[index].isDone = !store.value[index].isDone
  }
  const remove = (item:Item) => {
    const index = store.value.indexOf(item)
    store.value.splice(index,1)
  }
  return {store, actons: {changeDone, remove}}
}

export const provideTodoStore = () => {
  const store = todoStore()
  provide(todoStoreKey, store)
  return store
}

export const useTodoStore = () => {
  const store = inject(todoStoreKey)
  if (!store) throw new Error("todo Store is undefied")
  return store
}

export default defineComponent({
  name:"TodoListProvide",
  setup() {
    const store = provideTodoStore()
    return {
      items: store.store
    }
  },
  render(){
    return h(TodoListViewProvide, {
      items:this.items,
    })
  }
})