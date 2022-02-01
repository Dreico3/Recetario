
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
export function getFoodLevel(puntuacion){
    if(puntuacion<=25){
        return 'por lo menos llegaras al cielo mas rapido';
    }else if(puntuacion<=50){
        return 'comida no saludable';
    }else if(puntuacion<=75){
        return 'comida no tan saludable';
    }else if(puntuacion<=80){
        return 'comida saludable';
    }else if(puntuacion<=100){
        return 'comida muy saludable';
    }
}

export const getRecipesWhitDiet =(diet, recetas)=>{

    let buscados = [];
        for (let i = 0; i < recetas.length; i++) {

            if (recetas[i].id.toString().length>10) {
               
                for (let j = 0; j < recetas[i].diets.length; j++) {
                   
                    if (recetas[i].diets[j].nombre.toLowerCase() === diet.toLowerCase()) {
                        buscados.push(recetas[i])
                    }
                }
            } else {
                
                for (let j = 0; j < recetas[i].diets.length; j++) {
                    if (recetas[i].diets[j].toLowerCase() === diet.toLowerCase()) {
                        buscados.push(recetas[i])
                    }
                }
            }
        }
        //console.log(buscados);
        return buscados;

}