import Message from './Message.vue'
import { createApp } from "vue"

function showMsg(value:string,handle:(...arg:any)=>void){
    const div = document.createElement('div')
    document.body.appendChild(div)
    const app = createApp(Message,{
        msg:value,
        onClick:()=>{
            console.log(handle)
            handle && handle(()=>{
                app.unmount()
                document.body.removeChild(div)
            })
            console.log()
        }
    })
    app.mount(div)
}

export default showMsg