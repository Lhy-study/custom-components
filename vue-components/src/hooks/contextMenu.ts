import { onMounted, ref , Ref , onUnmounted} from "vue";
function useContextMenu(el:  Ref<HTMLDivElement | null>) {
  const x = ref(0);
  const y = ref(0);
  const showMenu = ref(false);

  function handleShow(value: boolean) {
    showMenu.value = value;
  }
  function handleEnter(e:MouseEvent){
    // console.log(e.target);
    e.preventDefault();//阻止默认行为
    e.stopPropagation();//阻止冒泡
    showMenu.value=true;
    x.value = e.clientX;
    y.value = e.clientY;
  }
  function handleClose(){
    // console.log(1);
    showMenu.value=false
  }
  onMounted(() => {
    // 先捕获再冒泡 因为这个可能会运用在多个地方 ,在同一个页面可能会有多个触发菜单 ，所以我希望先关闭所有菜单，然后哦打开菜单
    el.value?.addEventListener("contextmenu",handleEnter);
    window.addEventListener("click",handleClose,true);
    document.addEventListener("contextmenu",handleClose,true);
  })
  onUnmounted(()=>{
    window.removeEventListener("click",handleClose);
    document.removeEventListener("contextmenu",handleClose)
  })
  return { x, y, showMenu, handleShow };
}

export default useContextMenu
