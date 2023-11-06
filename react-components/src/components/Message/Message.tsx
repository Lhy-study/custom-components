import React from "react"

interface prop{
    text:string,
    duration:number
}
const Message:React.FC<prop> = ({text}) => {
  return (
    <div>{text}</div>
  )
}
export default Message