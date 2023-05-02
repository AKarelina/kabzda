import type { Meta} from '@storybook/react';
import {Rating, RatingValueType} from "./Rating";
import {StoryObj} from "@storybook/react";
import {Page} from "../stories/Page";
import {useState} from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Rating> = {
    title: 'ControlledRating',
    component: Rating,
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

export const EmptyStars = () => <Rating value={0} onClick={()=>{}}/>
export const Rating1 = () => <Rating value={1} onClick={()=> {}}/>
export const Rating2 = () => <Rating value={2} onClick={()=> {}}/>
export const Rating3 = () => <Rating value={3} onClick={()=> {}}/>
export const Rating4 = () => <Rating value={4} onClick={()=> {}}/>
export const Rating5 = () => <Rating value={5} onClick={()=> {}}/>

export const ChangeRating = () => {
    const [rating, setRating] = useState<RatingValueType>(5)
        return<Rating value={rating} onClick={setRating}/>
}

export default meta;
type Story = StoryObj<typeof Rating>;