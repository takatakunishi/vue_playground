import { defineComponent, h, PropType } from "vue";

import ButtonView from "./ButtonView.vue"

export default defineComponent({
    name: "Button",
    props:{
        label:{
            type:String,
            required: true
        },
        click:{
            type:Function as PropType<() =>void>,
            required:true
        }
    },
    render(){
        return h(ButtonView, {
            label:this.$props.label,
            click:this.$props.click
        })
    }
})