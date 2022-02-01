import axios from 'axios';
export function postRes(receta){
    const temperament = (temperamentos) => {
        let aux = [];
        let cont = 1;
        for (const i in temperamentos) {
            console.log(temperamentos[i])
            if (temperamentos[i]) {
                aux.push(cont);
            }
            cont++;
        }

        return aux;
    }
    const hacerPasos=(pasos)=>{
        var listaPasos=[];
        for(const i in pasos){
            listaPasos.push(pasos[i])
        }
        return listaPasos;
    }

    axios({
        method: 'POST',
        url: 'http://localhost:3001/recipes/create',
        data: {
            sourceName: receta.sourceName,
            title: receta.title,
            summary: receta.summary,
            image: receta.image,
            healthScore: receta.healthScore,
            diet: temperament(receta.check), //hardcode
            analyzedInstructions: hacerPasos(receta.pasos)
        }
    })
        .then(res => alert('receta creada'))
        .catch(e => alert('no se pudo crear la receta intente nuevamente o consulte a su programador mas cercano'))

}
export async function getDiets(){
    return await axios.get('http://localhost:3001/types');
}
export async function getRecipes(){
    return await axios.get('http://localhost:3001/recipes');
    //return await axios.get('http://localhost:3001/recipes/recetas');
}
export async function getRecipesName(name){
    return await axios.get(`http://localhost:3001/recipes?name=${name}`);
}

export async function getRecipeId(id){
    return await axios.get(`http://localhost:3001/recipes/${id}`);
}