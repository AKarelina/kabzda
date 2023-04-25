import React, {useState} from 'react'
import o from './OnOff.module.css'




export const OnOff = () => {
    const [on, setOn] = useState<boolean>(false)

    const onStyle = {
        backgroundColor: on? "green": "white",
        width: "30px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px"
    }

    const offStyle = {
        backgroundColor: on? "white": "red",
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

    const onClickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.innerText === "On" ? setOn(true): setOn(false)
    }

    return (
        <div>
            <div style={onStyle} onClick={onClickHandler}>On</div>
            <div style={offStyle} onClick={onClickHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}




