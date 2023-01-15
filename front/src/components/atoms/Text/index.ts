import { defineComponent, h } from "vue"
import TextView from "./TextView.vue"

export default defineComponent({
  name: 'Text',
  props: {
    text: {
      type: String,
      required: true
    },
  },
  render(){
    return h(TextView, {
      text:this.$props.text
    })
  }
})