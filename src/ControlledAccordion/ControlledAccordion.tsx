import React from "react";

type AccordionPropsType = {
    accordionTitle: string
    setCollapsed: (collapsed: boolean)=>void
    collapsed: boolean
    items: ItemType[]
    onClickCallback: (value: any) => void

}



export const ControlledAccordion =(props: AccordionPropsType)=>{


    return(
        <div>
            <AccordionTitle  setCollapsed={()=>props.setCollapsed(!props.collapsed)} title={props.accordionTitle}/>
            {!props.collapsed && <AccordionBody onClickCallBack={props.onClickCallback} items={props.items}/>}
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

type AccordionBodyType = {
    items: ItemType[]
    onClickCallBack: (value: string) => void
}

type ItemType = {
    title: string,
    value: any
}
const AccordionBody = (props: AccordionBodyType) => {
    return (
        <ul>
            {props.items.map((item, index) =><li key={index} onClick={()=>props.onClickCallBack(item.value)}>{item.value}</li>)}
        </ul>

    )

}