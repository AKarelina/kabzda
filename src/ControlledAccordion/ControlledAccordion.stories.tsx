import type { Meta} from '@storybook/react';
import {ControlledAccordion} from "./ControlledAccordion";
import {StoryObj} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ControlledAccordion> = {
    title: 'ControlledAccordion',
    component: ControlledAccordion,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export default meta;
type Story = StoryObj<typeof ControlledAccordion>;


const callBack = action("change mode true or false")
const callBackOnClick = action("change value")
export const CollapsedMode = () =><ControlledAccordion onClickCallback={callBack} accordionTitle={"Menu"} collapsed={true} setCollapsed={callBack} items={[]}/>
export const UnCollapsedMode = () =><ControlledAccordion onClickCallback={callBackOnClick} accordionTitle={"Users"} collapsed={false} setCollapsed={callBack} items={[{title:"Anna",value:1 }]}/>

export const ChangeMode = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <ControlledAccordion onClickCallback={callBackOnClick} accordionTitle={"Users"} collapsed={collapsed} setCollapsed={setCollapsed} items={[{title:"Anna",value:1 }]}/>
    )
}

