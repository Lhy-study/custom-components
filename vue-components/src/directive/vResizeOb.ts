//因为这里我要bingding里面那里拿到方法，我的ob写在外面，所以通过new weakMap 来构建映射关系
const map = new WeakMap();
const ob = new ResizeObserver((entries)=>{
    for (const iterator of entries) {
        // console.log(iterator);
        const handle = map.get(iterator.target);
        // console.log(handle);
        if(handle){
            handle({
                width:iterator.borderBoxSize[0].inlineSize,
                height:iterator.borderBoxSize[0].blockSize
            })
        }
    }
})
const vResizeOb = {
  mounted(el: HTMLElement,binding: { value: any; }){
    map.set(el,binding.value)
    ob.observe(el)
  },
  unmounted(el:HTMLElement){
    ob.unobserve(el)
  }
};

export default vResizeOb;
