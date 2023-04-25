import React, {useState} from "react";

export const UncontrolledRating = () => {
    const [value, setValue] = useState<number>(0)


    return (
        <div>
            <Star selected={value > 0} value={1} setValue={setValue}/>
            <Star selected={value > 1} value={2} setValue={setValue}/>
            <Star selected={value > 2} value={3} setValue={setValue}/>
            <Star selected={value > 3} value={4} setValue={setValue}/>
            <Star selected={value > 4} value={5} setValue={setValue}/>
        </div>
    )

}

type StarType = {
    selected: boolean
    setValue: (value: 1 | 2 | 3 | 4 | 5) => void,
    value: 1 | 2 | 3 | 4 | 5

}

export const Star = (props: StarType) => {
    const setValue = () => {
        props.setValue(props.value)
    }
    return (
        <span onClick={setValue}>
            {props.selected? <b>Star</b> : "Star" }
        </span>
    )
}

