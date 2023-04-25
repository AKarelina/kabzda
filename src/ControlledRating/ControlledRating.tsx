import React, {useState} from "react";

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type ControlledRatingType = {
    value: RatingValueType
    onClick: (ratingValue: RatingValueType) => void
}
export const ControlledRating = (props: ControlledRatingType) => {

    return (
        <div>
            <Star selected={props.value > 0} setValue={()=>props.onClick(1)}/>
            <Star selected={props.value > 1} setValue={()=>props.onClick(2)}/>
            <Star selected={props.value > 2} setValue={()=>props.onClick(3)}/>
            <Star selected={props.value > 3} setValue={()=>props.onClick(4)}/>
            <Star selected={props.value > 4} setValue={()=>props.onClick(5)}/>
        </div>
    )

}

type StarType = {

    selected: boolean
    setValue: () => void

}

export const Star = (props: StarType) => {
    const setValue = () => {
        props.setValue()
    }
    return (
        <span onClick={setValue}>
            {props.selected ? <b>Star</b> : "Star"}
        </span>
    )
}

