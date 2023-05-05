// Button.stories.ts|tsx

import type { Meta } from '@storybook/react';
import React, {ChangeEvent, useRef, useState} from "react";

export const UncontrolledInput = () => <input/>
export const ControlledInput = () => <input value={"controlledInput"}/>

export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChangeSetValue = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return (<>
            <input onChange={onChangeSetValue}/>
            {value}
    </>

    )
}

export const GetValueUncontrolledInput = () =>{

    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const saveValue = () =>{
        const newValue = inputRef.current as HTMLInputElement
        setValue(newValue.value)


    }

    return(
        <>
            <input ref={inputRef}/><button onClick={saveValue}>save</button>
            save value: {value}
            </>

    )
}

const meta: Meta<typeof UncontrolledInput> = {
    title: 'input',
    component: UncontrolledInput,
};
export default meta;





