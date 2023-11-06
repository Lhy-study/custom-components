import React, { Fragment, ReactNode } from "react"
import { createPortal } from "react-dom"
interface Prop{
    children:ReactNode,
    keys:string
}
const Teleport :React.FC<Prop> = ({children,keys}) => {
  return (
      <Fragment>
          {createPortal(children,document.body,keys)} 
      </Fragment> 
  )
}
export default Teleport