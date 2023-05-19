import {StateType, TOGGLE_COLLAPSED, UncontrolledAccordionReducer} from "./UncontrolledAccordionReducer";

test("Reducer should change collapsed value to an opposite value", ()=>{

    const state: StateType = {
        collapsed: false
    }

    const newState = UncontrolledAccordionReducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)
})

test("Reducer should change collapsed value to an opposite value", ()=>{

    const state: StateType = {
        collapsed: true
    }

    const newState = UncontrolledAccordionReducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)
})

test("Reducer should throw an error", ()=>{

    const state: StateType = {
        collapsed: true
    }

    expect(()=>UncontrolledAccordionReducer(state, {type:"ERROR"})).toThrowError()
})