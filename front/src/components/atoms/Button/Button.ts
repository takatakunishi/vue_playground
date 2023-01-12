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
    setup(props){
        return {
            label:props.label,
            click:props.click
        }
    },
    render(){
        return h(ButtonView, {
            label:this.label,
            click:this.click
        })
    }
})