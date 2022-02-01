const initialState = {
    //esto se armara mas tarde que temprano :D
    recipes:[],
    busquedas:null,
    dietas:[],
    order:null
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
        case 'ORDER_ZA':
            return{
                ...state,
                recipes:action.payload,
                order:action.order
            }
        case 'ORDER_AZ':
            return{
                ...state,
                recipes:action.payload,
                order:action.order
            }
        case 'ORDER_PUN':
            return{
                ...state,
                recipes:action.payload,
                order:action.order
            }
        default:
            return state;
    }
}

export default rootReducer;