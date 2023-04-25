import React, {useState} from "react";

type AccordionPropsType = {
    accordionTitle: string

}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.accordionTitle} collapsed={!collapsed} setCollapsed={setCollapsed}/>
            {collapsed && <AccordionBody/>}
        </div>

    )
}
type AccordionTitle = {
    title: string
    setCollapsed: (collapsed: boolean) => void
    collapsed: boolean
}
const AccordionTitle = (props: AccordionTitle) => {
    const setCollapsed = () => {
        props.setCollapsed(props.collapsed)
    }
    return (
        <h3 onClick={setCollapsed}>{props.title}</h3>
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