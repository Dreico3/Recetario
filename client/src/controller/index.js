
export function busquedaId(recetas,id){
    for(let i=0;i<recetas.length;i++){
        // eslint-disable-next-line eqeqeq
        if(recetas[i].id==id){
            return recetas[i];
        }
    }
    return false;
}

export function getPasos(lista){
    let aux=[]
    for(let i=0;i<lista.length;i++){
        aux.push(lista[i].step)
    }
    return aux;
}

export function getDiets(receta){
    let aux=[];
    if(receta.id.toString().length<10){
        for (let i = 0; i < receta.diets.length; i++) {
            aux.push(receta.diets[i])
            
        }
        
    }else{
        for (let i = 0; i < receta.diets.length; i++) {
            aux.push(receta.diets[i].nombre)
        }

    }
    return aux;
}