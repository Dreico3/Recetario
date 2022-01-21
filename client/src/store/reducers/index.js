const initialState = {
    //esto se armara mas tarde que temprano :D
    recipes:'Esto es el estado'
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INITIAL':
            return {
                ...state,
                recipes:action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;