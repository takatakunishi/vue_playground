import { defineComponent, h, PropType, Ref } from "vue"
import TodoItemView from "./TodoItemView.vue"

export type Item = {
  title:string,
  description:string,
  isDone:Ref<boolean>
}

export default defineComponent({
  name: 'TodoItem',
  props: {
    item:{
      type: Object as PropType<Item>,
      required: true
    }
  },
  setup(props, { emit }) {
    const chengeDone = () => {
      emit('chengeDone',props.item)
    }
    return {
      item:props.item,
      chengeDone
    }
  },
  render(){
    return h(TodoItemView, {
      item: this.item,
      chengeDone:this.chengeDone
    })
  }
})