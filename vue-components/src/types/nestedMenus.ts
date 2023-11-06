interface nestedMenusProps{
    /**
     * 菜单名称
     */
    name: string
    /**
     * 菜单图标
     */
    icon: string
    /**
     * 菜单链接
     */
    url: string
    /**
     * 菜单子菜单
     */
    children?: nestedMenusProps[]
}

export default nestedMenusProps