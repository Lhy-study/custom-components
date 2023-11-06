import { reactive } from "vue"
const result = (function(){
    let view = reactive({
        x:window.innerWidth,
        y:window.innerHeight
    })
    window.addEventListener("resize",()=>{
        view.y=window.innerHeight
        view.x=window.innerWidth
    })
    return view
})()

export default result