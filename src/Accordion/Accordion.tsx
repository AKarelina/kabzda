import React from "react";

type AccordionPropsType = {
    accordionTitle: string
    collapsed: boolean
}

type AccordionTitle = {
    title: string
}

export const Accordion =(props: AccordionPropsType)=>{

    return(
        <div>
            <AccordionTitle title={props.accordionTitle}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
}

const AccordionTitle = (props: AccordionTitle) => {
    return (
        <h3>{props.title}</h3>
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