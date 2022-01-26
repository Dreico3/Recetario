
export function busquedaId(recetas,id){
    for(let i=0;i<recetas.length;i++){
        if(recetas[i].id==id){
            return recetas[i];
        }
    }
    return 'no encontrado'
}