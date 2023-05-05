import type {Meta} from '@storybook/react';
import {StoryObj} from "@storybook/react";
import {useState} from "react";
import {Select} from "./Select";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export const SelectOption = () => {
    const [city, setCity] = useState<string | null>(null)
    const selectCity = (title: string) => {
        setCity(title)

    }
    return (
        <>
            <Select items={[{title: "None", value: 0},
                {title: "Moscow", value: 1},
                {title: "Berlin", value: 2},
                {title: "Paris", value: 3},
                {title: "Milan", value: 4},
                {title: "New York", value: 0}]} onChange={selectCity}/>
        </>
        )

}

export default meta;
