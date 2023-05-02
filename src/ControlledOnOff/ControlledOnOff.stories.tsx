import type { Meta} from '@storybook/react';
import {ControlledOnOff} from './ControlledOnOff';
import {StoryObj} from "@storybook/react";
import {useState} from "react";

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
export default meta;
type Story = StoryObj<typeof ControlledOnOff>;