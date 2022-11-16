import React, {useReducer} from "react";
import {reducer} from "./reducer";

type AccordionPropsType = {
    title: string
}

export const UnControlledAccordion = (props: AccordionPropsType) => {

    // let [collapsed, setCollapsed] = useState(true)
    let [state, dispatch] = useReducer(reducer, { collapsed: false })

    return (
        <div>
            {/*<AccordionTitle title={props.title} onClick={() => {setCollapsed(!collapsed)}}/>*/}
            <AccordionTitle title={props.title} onClick={() => {dispatch({type: 'TOGGLE-COLLAPSED'})}}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    )
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
        return <h4 onClick={() => props.onClick()}>{props.title}</h4>
}


function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}