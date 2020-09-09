export const madeSelect = modeType => {
    return{
        type: "MODE_SELECTED",
        payload: modeType
    }
}

export const newTempalte = newTemp => {
    return{
        type: "ADD_TEMPLATE",
        payload: newTemp
    }
}

export const loadTempalteAct = newTemp => {
    return{
        type: "LOAD_TEMPLATE",
        payload: newTemp
    }
}
