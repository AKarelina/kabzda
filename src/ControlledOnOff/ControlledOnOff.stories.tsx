import type { Meta} from '@storybook/react';
import {ControlledOnOff, ControlledOnOffType} from './ControlledOnOff';
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


type Story = StoryObj<typeof ControlledOnOff>;
export const OnMode: Story = {
    args: {
        on: true,
        setOn: action("clicked on or off"),
    },
};

export const OffMode: Story = {
    args: {
        on: false,
        setOn: action("clicked on or off"),
    },
};

export const OnControlledOnOFF = () => {
const [on, setOn] = useState<boolean>(false)
    return (
        <ControlledOnOff on={on} setOn={setOn}/>
        )
}
export default meta;
