import type {Meta} from '@storybook/react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";
import {useState} from "react";


// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Select> = {
    title: 'Select',
    component: Select,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};
export const WithValue = () => {
    const [selectedItem, setSelectedItem] = useState("1")

    return (
            <Select
                value={selectedItem}
                items={[
                {title: "Moscow", value: "1"},
                {title: "Berlin", value: "2"},
                {title: "Paris", value: "3"},
                {title: "Milan", value: "4"},
                {title: "New York", value: "5"}]}
                onChange={setSelectedItem}/>

        )

}

export const WithoutValue = () => {
    const [selectedItem, setSelectedItem] = useState(null)
    return (
        <Select
            value={selectedItem}
            items={[
                {title: "Moscow", value: "1"},
                {title: "Berlin", value: "2"},
                {title: "Paris", value: "3"},
                {title: "Milan", value: "4"},
                {title: "New York", value: "5"}]}
            onChange={setSelectedItem}/>
    )

}




export default meta;
