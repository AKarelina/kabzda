
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"

export type StateType = {
    collapsed: boolean
}

export type ActionType = {
    type: string
}
export const UncontrolledAccordionReducer = (state: StateType, action: ActionType) => {
    switch(action.type) {
        case TOGGLE_COLLAPSED:
            return {...state, collapsed: !state.collapsed}
        default:
            throw new Error("Bad action type!")
    }
}