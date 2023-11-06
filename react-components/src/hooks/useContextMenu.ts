import { RefObject, useEffect, useState } from "react"
interface State {
    x: number,
    y: number,
    showMenu: boolean
}
const useContextMenu = (el:RefObject<HTMLDivElement>) => {
    const [state, setState] = useState<State>({
        x: 0,
        y: 0,
        showMenu: false
    })
    const handleEnter = (e: MouseEvent) => {
        e.stopPropagation()
        e.preventDefault()
        setState({...state,showMenu:true,x:e.x,y:e.y})
    }
    const handleClick = (e: MouseEvent) =>{
        setState({...state,showMenu:false})
    }
    const handleMenu = ()=>{
        setState({...state,showMenu:false})
    }
    useEffect(() => {
        el.current?.addEventListener("contextmenu", handleEnter)
        window.addEventListener("click", handleClick,true)
        window.addEventListener("contextmenu",handleMenu,true)
        return ()=>{
            el.current?.removeEventListener("contextmenu", handleEnter)
            window.removeEventListener("click", handleClick)
            window.removeEventListener("contextmenu",handleMenu)
        }
    },[el])
    return state
}

export default useContextMenu