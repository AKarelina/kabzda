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
    const [city, setCity] = useState<string>("None")
    const selectCity = (title: string) => {
        setCity(title)

    }
    return (
        <>
            <Select items={[
                {title: "Moscow", value: 0},
                {title: "Berlin", value: 1},
                {title: "Paris", value: 2},
                {title: "Milan", value: 3},
                {title: "New York", value: 4}]} onChange={selectCity}/>
        </>
        )

}

export default meta;
