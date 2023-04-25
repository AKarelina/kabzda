import React from "react";

type AccordionPropsType = {
    accordionTitle: string
    setCollapsed: (collapsed: boolean)=>void
    collapsed: boolean

}



export const ControlledAccordion =(props: AccordionPropsType)=>{

    return(
        <div>
            <AccordionTitle setCollapsed={()=>props.setCollapsed(!props.collapsed)} title={props.accordionTitle}/>
            {!props.collapsed && <AccordionBody/>}
        </div>

    )
}

type AccordionTitle = {
    title: string
    setCollapsed: ()=>void
}
const AccordionTitle = (props: AccordionTitle) => {
    return (
        <h3 onClick={props.setCollapsed}>{props.title}</h3>
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