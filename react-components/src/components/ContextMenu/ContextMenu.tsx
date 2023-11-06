import "./ContextMenu.css";
import React, { ReactNode, useEffect, useMemo, useRef, useState } from "react";
import Teleport from "../Teleport/Teleport";
import useContextMenu from "../../hooks/useContextMenu";
import useMenuAtu from "../../hooks/useMenuAtu";
import viewPort from "../../hooks/useViewAtu";
import "./ContextMenu.css";
interface Prop {
    children: ReactNode,
    id: string,
    list: Array<{ label: string }>
    onSelect: (data: any) => void
}

interface State {
    x: number,
    y: number,
}
const ContextMenu: React.FC<Prop> = ({
    children, id, list, onSelect
}) => {
    const handleEnter = (obj: { label: string }) => {
        onSelect(obj)
    }
    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);
    const { x, y, showMenu } = useContextMenu(containerRef);
    const { width, height } = useMenuAtu(menuRef)
    const view = viewPort()
    const state = useMemo(() => {
        return {
            x: x < view.width - width ? x : x - width,
            y: y < view.height - height ? y : y - height
        }
    }, [x, y, view, width, height])
    return (
        <div className="container" ref={containerRef}>
            {children}
            <Teleport keys={id}>
                <div className="context-menu" style={{ top: state.y + 'px', left: state.x + 'px' }} ref={menuRef}>
                    {
                        showMenu && (list.map((item) => (
                            <div
                                key={item.label}
                                className="context-menu-item"
                                onClick={() => handleEnter(item)}
                            >
                                {item.label}
                            </div>
                        )))
                    }
                </div>
            </Teleport>
        </div>
    )
}
export default ContextMenu