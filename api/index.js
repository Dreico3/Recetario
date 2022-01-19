//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'===== 
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {Diet} = require('./src/db')
// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(3001, async () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
    /* const dieta1 = await Diet.create({
      nombre: 'Sin gluten',
      descripcion: 'Eliminar el gluten significa evitar el trigo, la cebada, el centeno y otros cereales que contienen gluten y los alimentos elaborados con ellos (o que pueden haber sido contaminados de forma cruzada).'
    })
    const dieta2 = await Diet.create({
      nombre: 'cetogénico',
      descripcion: 'La dieta cetogénica se basa más en la proporción de grasas, proteínas y carbohidratos en la dieta que en ingredientes específicos. En términos generales, los alimentos ricos en grasas y proteínas son aceptables y los alimentos ricos en carbohidratos no lo son. La fórmula que utilizamos tiene un contenido de grasa del 55-80 %, un contenido de proteína del 15-35 % y menos del 10 % de carbohidratos.'
    })
    const dieta3 = await Diet.create({
      nombre: 'Vegetariano',
      descripcion: 'Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina.'
    })
    const dieta4 = await Diet.create({
      nombre: 'Lacto vegetariana',
      descripcion: 'Todos los ingredientes deben ser vegetarianos y ninguno de los ingredientes puede ser o contener huevo.'
    })
    const dieta5 = await Diet.create({
      nombre: 'Ovo-Vegetariano',
      descripcion: 'Todos los ingredientes deben ser vegetarianos y ninguno de los ingredientes puede ser o contener lácteos.'
    })
    const dieta6 = await Diet.create({
      nombre: 'Vegano',
      descripcion: 'Ningún ingrediente puede contener carne o subproductos cárnicos, como huesos o gelatina, ni puede contener huevos, lácteos o miel.'
    })
    const dieta7 = await Diet.create({
      nombre: 'pescetariano',
      descripcion: 'Todo está permitido, excepto la carne y los derivados de la carne: algunos pescetarianos comen huevos y lácteos, otros no.'
    })
    const dieta8 = await Diet.create({
      nombre: 'Paleo',
      descripcion: 'Los ingredientes permitidos incluyen carne (especialmente alimentada con pasto), pescado, huevos, verduras, algunos aceites (por ejemplo, aceite de coco y de oliva) y, en cantidades más pequeñas, frutas, nueces y batatas. También permitimos la miel y el jarabe de arce (populares en los postres Paleo, pero los seguidores estrictos de Paleo pueden no estar de acuerdo). Los ingredientes no permitidos incluyen legumbres (p. ej., frijoles y lentejas), granos, productos lácteos, azúcar refinada y alimentos procesados.'
    })
    const dieta9 = await Diet.create({
      nombre: 'Primitivo',
      descripcion: 'Muy similar a Paleo, excepto que se permiten lácteos: piense en leche cruda y entera, mantequilla, ghee, etc.'
    })
    const dieta10 = await Diet.create({
      nombre: 'FODMAP bajo',
      descripcion: 'FODMAP significa "oligo-, di-, mono-sacáridos y polioles fermentables". Nuestra ontología sabe qué alimentos se consideran altos en este tipo de carbohidratos (por ejemplo, legumbres, trigo y productos lácteos)'
    })
    const dieta11 = await Diet.create({
      nombre: 'Entero30',
      descripcion: 'Los ingredientes permitidos incluyen carne, pescado/mariscos, huevos, verduras, fruta fresca, aceite de coco, aceite de oliva, pequeñas cantidades de frutos secos y frutos secos/semillas. Los ingredientes no permitidos incluyen edulcorantes agregados (naturales y artificiales, excepto pequeñas cantidades de jugo de frutas), lácteos (excepto mantequilla clarificada o ghee), alcohol, granos, legumbres (excepto judías verdes, guisantes y guisantes) y aditivos alimentarios. , como carragenina, glutamato monosódico y sulfitos.'
    })
    const dietas=[dieta1,dieta2,dieta3,dieta4,dieta5,dieta6,dieta7,dieta8,dieta9,dieta10,dieta11]
    Promise.all(dietas)
    .then(res=>{
      console.log('dietas precargadas')
    })
    .catch(err=>console.log('hay un error al cargar las dietas')) */
  });
});
