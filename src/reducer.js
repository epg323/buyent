const reducer = ( state = [], action) => {
    Object.freeze(state)
    switch(action.type){
        case "ADD_COMMODITY":
            return [...state, action.commodity]
        case "REMOVE_COMMODITY":
            return [...state, action.commodity]
        default: 
            return state
    }
}

export default reducer