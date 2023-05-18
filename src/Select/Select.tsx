import styles from './Select.module.css';
import {useEffect, useState} from "react";

type SelectType = {
    currentValue: string
    options: Array<OptionsType>
    onChange: (value: string) => void

}

type OptionsType =
    {
        item: string,
        value: string
    }



export const Select = (props: SelectType) => {
    const [active, setActive] = useState<boolean>(false)
    const [hoverItem, setHoverItem] = useState<string>(props.currentValue)

    const selectedItem = props.options.find(o=>o.value === props.currentValue)
    console.log(selectedItem)


    useEffect(()=> {
        setHoverItem(props.currentValue)
    }, [props.currentValue])


    const hoverElement = (value: string) => {
        setHoverItem(value)
    }
    const showItems = () => {
        setActive(!active)
    }

    const itemClicked = (value: string) => {
        props.onChange(value)
        showItems()
    }

    const iterateItems = (e:React.KeyboardEvent<HTMLDivElement>) => {
        if(e.key === "ArrowUp" || e.key === "ArrowDown"){
            for(let i =0; i< props.options.length; i++){
                if(props.options[i].value === hoverItem) {
                    const nextElement = e.key === "ArrowDown"
                        ? props.options[i + 1]
                        : props.options[i - 1]
                    if(nextElement){
                        props.onChange(nextElement.value)
                        return
                    }
                }
            }
            if(!selectedItem){
                props.onChange(props.options[0].value)
            }
        }
        if(e.key === "Enter" || e.key === "Escape"){
            setActive(false)
        }
    }


    return (
        <div className={styles.select} onKeyUp={iterateItems} tabIndex={0}>
            <span className={styles.span} onClick={showItems}>{selectedItem && selectedItem.item}</span>
            {active &&
                <div className={styles.items}>
                    {props.options.map((o) =>{
                        return (
                            <div
                                className={hoverItem===o.value? styles.highlightElement: ""}
                                onClick={()=>itemClicked(o.value)}
                                onMouseEnter={()=>hoverElement(o.value)}
                                key={o.value}
                            >
                                {o.item}
                            </div>)
                    })}
                </div>
        }
        </div>
    )
}
