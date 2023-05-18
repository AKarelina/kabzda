import type {Meta} from '@storybook/react';
import {Select} from "./Select";
import {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};


export const SelectWithValue = () => {
    const [value, setValue] = useState("1")

    return (
        <Select currentValue={value}
                onChange={setValue}
                options={
                    [
                        {item: "Moscow", value: "1"},
                        {item: "New York", value: "2"},
                        {item: "Paris", value: "3"},
                        {item: "Tashkent", value: "4"},
                    ]}
        />
    )

}
export default meta;
