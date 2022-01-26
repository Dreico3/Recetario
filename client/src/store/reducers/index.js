const initialState = {
    //esto se armara mas tarde que temprano :D
    recipes:[],
    busquedas:null,
    dietas:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'INITIAL':
            return {
                ...state,
                dietas:action.payload2,
                recipes:action.payload,
            }
        case 'SEARCH':
            return{
                ...state,
                busquedas:action.payload
            }
        case 'DIET':
            return{
                ...state,
                dietas:action.payload
            }
        default:
            return state;
    }
}

export default rootReducer;