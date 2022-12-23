import { defineComponent, h } from "vue";

import ButtonView from "./ButtonView.vue"

export default defineComponent({
    name: "Button",
    props:{
        label:{
            type:String,
            required: true
        }
    },
    setup(props){
        const click = () => {
            console.log("clicked")
        }
        return {
            label:props.label,
            click
        }
    },
    render(){
        return h(ButtonView, {
            label:this.label,
            click:this.click
        })
    }
})