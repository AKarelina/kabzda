import type { Meta} from '@storybook/react';
import {ControlledOnOff} from './ControlledOnOff';
import {StoryObj} from "@storybook/react";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof ControlledOnOff> = {
    title: 'ControlledRating',
    component: ControlledOnOff,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const OnControlledOnOFF = () => {
    const [on, setOn] = useState<boolean>(false)
    return (
        <ControlledOnOff on={on} setOn={setOn}/>
        )
}

const callBack = action("on or off was called")
export const OnMode = () => <ControlledOnOff on={true} setOn={callBack}/>

export const OffMode = () => <ControlledOnOff on={false} setOn={callBack}/>

export default meta;
type Story = StoryObj<typeof ControlledOnOff>;