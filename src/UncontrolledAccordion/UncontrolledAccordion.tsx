import React, {useReducer, useState} from "react";
import { UncontrolledAccordionReducer} from "./UncontrolledAccordionReducer";

type AccordionPropsType = {
    accordionTitle: string

}


export const UncontrolledAccord = (props: AccordionPropsType) => {
    const [collapsed, dispatch] = useReducer(UncontrolledAccordionReducer, {collapsed: false})
    return (
        <div>
            <AccordionTitle title={props.accordionTitle} onClick={() => dispatch({type: "TOGGLE-COLLAPSED"})}/>
            {collapsed && <AccordionBody/>}
        </div>

    )
}
type AccordionTitle = {
    title: string
    onClick: () => void
}
const AccordionTitle = (props: AccordionTitle) => {

    return (
        <h3 onClick={props.onClick}>{props.title}</h3>
    )
}

const AccordionBody = () => {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
        </ul>
    )
}

export const UncontrolledAccordion = React.memo(UncontrolledAccord)

