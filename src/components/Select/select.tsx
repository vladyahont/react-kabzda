import React, {useState, KeyboardEvent, useEffect} from "react";
import s from './select.module.css'

type ItemType = {
    title: string
    value: any
}

export type SelectType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}


export function Select(props: SelectType) {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)


    const selectedItem = props.items.find(i => i.value === props.value)

    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect( () => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItem = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItem()
    }

    const onKeyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
        for (let i = 0; i < props.items.length; i++) {
            if (props.items[i].value === hoveredElementValue) {
                const pretendentElement = event.key === 'ArrowDown'
                    ? props.items[i + 1]
                    : props.items[i - 1]

                if (pretendentElement) {
                    props.onChange(pretendentElement.value)
                    return
                }
            }
        }}

        if (event.key === 'Enter' || event.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <>
            {/*<select>*/}
            {/*    <option value="1">Minsk</option>*/}
            {/*    <option value="2">Moscow</option>*/}
            {/*    <option value="3">Kiev</option>*/}
            {/*</select>*/}
            <div className={s.select} onKeyUp={onKeyUpHandler}>
                <span className={s.main} onClick={toggleItem}>
                    {selectedItem && selectedItem.title}</span>
                {
                    active &&
                    <div className={s.items}>
                        {props.items.map(i => <div
                            onMouseEnter={() => {setHoveredElementValue(i.value)}}
                            className={s.item + ' ' + (hoveredItem === i ? s.selected : '')}
                            key={i.value}
                            onClick={() => {onItemClick(i.value)}}>
                            {i.title}</div>)}
                    </div>
                }
            </div>
        </>
    )
}