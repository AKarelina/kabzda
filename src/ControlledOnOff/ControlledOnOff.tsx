import React, {useState} from 'react'

export type ControlledOnOffType = {
    on: boolean,
    /**
     * Callback that is called when button is clicked
     * @param status
     */
    setOn: (status: boolean) => void
}


export const ControlledOnOff = (props: ControlledOnOffType) => {

    const onStyle = {
        backgroundColor: props.on? "green": "white",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px"
    }

    const offStyle = {
        backgroundColor: props.on? "white": "red",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px"
    }

    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        marginLeft: "10px",
        display: "inline-block",
        backgroundColor: props.on ? "green" : "red"
    }

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.innerText === "On" ? props.setOn(true): props.setOn(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On</div>
            <div style={offStyle} onClick={onClickHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}




