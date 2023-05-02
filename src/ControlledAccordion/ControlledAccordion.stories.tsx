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
export const CollapsedMode = () =><ControlledAccordion accordionTitle={"Menu"} collapsed={true} setCollapsed={callBack}/>
export const UnCollapsedMode = () =><ControlledAccordion accordionTitle={"Users"} collapsed={false} setCollapsed={callBack}/>

export const ChangeMode = () => {

    const [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <ControlledAccordion accordionTitle={"Users"} collapsed={collapsed} setCollapsed={setCollapsed}/>
    )
}

