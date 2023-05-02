import type { Meta} from '@storybook/react';
import {Accordion} from "./Accordion";
import {StoryObj} from "@storybook/react";

import React, {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Accordion> = {
    title: 'ControlledRating',
    component: Accordion,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export default meta;
type Story = StoryObj<typeof Accordion>;

export const CollapsedMode = () =><Accordion accordionTitle={"Menu"} collapsed={true}/>
export const UnCollapsedMode = () =><Accordion accordionTitle={"Users"} collapsed={false}/>



