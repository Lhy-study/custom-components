import "./index.css"
import showMsg from "./imperative/showMsg";
import ContextMenu from "./components/ContextMenu/ContextMenu";
function App() {
  const handleClick = () => {
    showMsg('测试组件')
  }
  const handleEnter = (data:{label:string})=>{
    console.log(data);
  }
  return (
    <div className="App">
      你好
      <button onClick={handleClick}>
        提示消息
      </button>
      <ContextMenu id="app" list={[{ label: '1' }, { label: '2' }]} onSelect={handleEnter}>
        <div className="parent"></div>
      </ContextMenu>
    </div>
  )
}
export default App
