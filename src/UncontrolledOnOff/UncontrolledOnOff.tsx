import React, {useState} from 'react'


type UncontrolledOnOffType = {
    onChange: (status: boolean) => void
}

export const UncontrolledOnOff = (props: UncontrolledOnOffType) => {
    const [on, setOn] = useState<boolean>(false)

    const onStyle = {
        backgroundColor: on ? "green" : "white",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px"
    }

    const offStyle = {
        backgroundColor: on ? "white" : "red",
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
        backgroundColor: on ? "green" : "red"
    }
    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}




