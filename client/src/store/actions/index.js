import { getDiets,getRecipes,getRecipesName } from '../../services';
export function Optener() {
    return async (dispatch) => {

        const recetas = await getRecipes();
        const dietas = await getDiets();
        return dispatch({
            type: 'INITIAL',
            payload: recetas.data,
            payload2: dietas.data
        })
    }
}

export function Buscar(nombre) {
    return async (dispatch) => {
        const recetas = await getRecipesName(nombre);

        return dispatch({
            type: 'SEARCH',
            payload: recetas.data
        })
    }
}

export function Diets() {
    return async (dispatch) => {
        const dietas = await getDiets();

        return dispatch({
            type: 'DIET',
            payload: dietas.data
        })
    }
}

export function ordenarZA(estado){
    function SortArray(x, y){
        return y.title.localeCompare(x.title);
    }
    var s = estado.sort(SortArray);
    return {
        type: 'ORDER_ZA',
        payload: s,
        order: true
    }
}

export function ordenarAZ(estado){
    function SortArray(x, y){
        return x.title.localeCompare(y.title);
    }
    var s = estado.sort(SortArray);
    return {
        type: 'ORDER_AZ',
        payload: s,
        order: false
    }
}