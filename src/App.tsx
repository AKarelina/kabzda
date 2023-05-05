import React, {useEffect, useState} from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";
import {UncontrolledOnOff} from "./UncontrolledOnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledRating} from "./UncontrolledRating/UncontrolledRating";
import {ControlledAccordion} from "./ControlledAccordion/ControlledAccordion";
import {Rating, RatingValueType} from "./ControlledRating/Rating";
import {ControlledOnOff} from "./ControlledOnOff/ControlledOnOff";

function App() {
    const [value, setValue] = useState<RatingValueType>(0)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(true)
    const [on, setOn] = useState<boolean>(false)
    const [newValue, setNewValue] = useState("")

  return (
    <div className="App">
        {/*<AppTitle title={"My Title"}/>*/}
        {/*<Accordion accordionTitle={"Menu"} collapsed={true}/>*/}
        {/*<Accordion accordionTitle={"Users"} collapsed={false}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        {/*<UncontrolledAccordion accordionTitle={"Menu"}/>*/}
        {/*<UncontrolledAccordion accordionTitle={"Users"}/>*/}
        {/*<UncontrolledRating/>*/}
        <UncontrolledOnOff onChange={setOn}/> {on.toString()}
        {/*<ControlledAccordion onClickCallback={} setCollapsed={setAccordionCollapsed} collapsed={accordionCollapsed} accordionTitle={"Controlled Menu"}/>*/}
        <Rating value={value} onClick={setValue}/>
        {/*<ControlledOnOff setOn={(status)=>setOn(status)} on={on}/>*/}

    </div>
  );
}

type AppTitleProsType = {
    title: string
}

const AppTitle = (props: AppTitleProsType) => {

    return <>
        ---{props.title}---
    </>
}


export default App;


