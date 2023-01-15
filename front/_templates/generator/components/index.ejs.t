---
to: src/components/<%= atomic %>/<%= component_name %>/index.ts
---

import { defineComponent, h } from "vue"
import <%= component_name %>View from "./<%= component_name %>View.vue"

// export const use<%= component_name %>Logic = (): Type => {
//   // 変数・関数を定義or外部から呼び出し
//   const someVal = ref("val")
//   const someFunc = (new:string) => {
//     someVal.value = new
//   }
//   return {someVal, someFunc}
// }

// // Provide/Injectを利用する場合
// type <%= component_name %>StoreType = ReturnType<typeof <%= h.inflection.camelize(component_name, true) %>Store>

// // InjectionKey型のProvide/InjectionKeyを生成することで、Injectで受け取る値で型推論が効くようになる。
// // InjectionKeyはSymbol型を継承しているためこの書き方になる。(Symbol型にすることで同一値の生成を防げる)
// const <%= h.inflection.camelize(component_name, true) %>StoreKey: InjectionKey<<%= component_name %>StoreType> = Symbol('<%= h.inflection.camelize(component_name, true) %>')

// const <%= h.inflection.camelize(component_name, true) %>Store = () => {
//   // 変数・関数を定義or外部から呼び出し
//   const someVal = ref("val")
//   const someFunc = (new:string) => {
//     someVal.value = new
//   }
//   return {someVal, someFunc}
// }

// // provideする側で呼び出して使用
// export const provide<%= component_name %>Store = () => {
//   const store = <%= h.inflection.camelize(component_name, true) %>Store()
//   provide(<%= h.inflection.camelize(component_name, true) %>StoreKey, store)
//   return store
// }

// // injectする側で呼び出して使用
// export const use<%= component_name %>Store = () => {
//   const store = inject(<%= h.inflection.camelize(component_name, true) %>Store)
//   if (!store) throw new Error("<%= h.inflection.camelize(component_name, true) %> Store is undefied")
//   return store
// }


export default defineComponent({
  name: '<%= component_name %>',
  props: {
    // propsVal: {
    //   type: String,
    //   required: true
    // },
    // propsFunc: {
    //   type: Function as PropType<() => void>,
    //   // PropsTypeはvueからimport
    //   // Array as PropType<DefinedType[]>,
    //   // Object as PropType<DefinedType>,
    //   required: true
    // }
  },
  setup(props) {
    // const func = () => {
    //   props.propsFunc()
    // }
    // const store = provide<%= component_name %>Store()
    return {
      // func,
      // provideVal = store.store.provideVal
    }
  },
  render(){
    return h(<%= component_name %>View, {
      // func:this.func,
      // propsVal:this.$props.propsVal
      // provideVal:this.provideVal
    })
  }
})