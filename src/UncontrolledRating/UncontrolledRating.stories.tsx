import type { Meta} from '@storybook/react';
import {StoryObj} from "@storybook/react";
import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import {Star, UncontrolledRating} from "./UncontrolledRating";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof UncontrolledRating> = {
    title: 'UncontrolledRating',
    component: UncontrolledRating,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const ChangeDefaultValue = () => {
    return (
        <UncontrolledRating defaultValue={4}/>
    )
}

export default meta;
type Story = StoryObj<typeof UncontrolledRating>;