import React, {useState} from "react";
import {action} from "@storybook/addon-actions";
import SelectInput from "@mui/material/Select/SelectInput";
import {MenuItem, NativeSelect} from "@mui/material";

type ItemType = {
    title: string,
    value: any
}


type SelectType = {
    onChange: (value: string) => void,
    items: ItemType[]
}

export const Select = (props: SelectType) => {

    const [value, setValue] = useState<string>("None")
    const onClickSelect = (event: React.MouseEvent<HTMLOptionElement>) => {
        action("City is select" + value)
        setValue(event.currentTarget.value)
    }
    return (
        <>
            <div>Select city</div>
            <NativeSelect color="success">
                <option>{value}</option>
            {props.items.map((i) =><option value={i.value} onClick={onClickSelect}>{i.title}</option>)}
            </NativeSelect>
        </>

    )
}