import axios from 'axios';

export function Optener() {
    return async (dispatch)=>{

        console.log('gola torola');
        const recetas = await axios.get('http://localhost:3001/recipes');

        //en construccions
        return dispatch({
            type:'INITIAL',
            payload:recetas.data
        })
    }
}