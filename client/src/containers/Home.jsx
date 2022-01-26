import React from "react";
import './css/home.css'


import { useEffect, useState } from 'react';
export default function Home() {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const onScroll = () => setOffset(window.pageYOffset);
        // clean up code
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
 
    return (
        <div>
            <section className="hero">
                <div className="parallax-img" style={{ top: offset / 1.4 + "px" }}></div>
                <div className="parallax-img"></div>
                <div className="header" style={{ opacity: 1 - offset / 300 }}>
                    <h1>CHEFCITO</h1>
                    <h6>recetario</h6>
                </div>
            </section>
            <section className="content">
                {offset > 100 ?
                    <div className="content-body" style={{ bottom: offset / 2 + "px" }}>
                        <h1>Chefsito</h1>
<br/>
                        <p>
                        El trabajo del crítico es sencillo en más de un sentido. Arriesgamos muy poco, y sin embargo usufructuamos de una posición situada por encima de quienes someten su trabajo y su persona a nuestro juicio. Prosperamos gracias a nuestras críticas negativas, que resultan divertidas cuando se las escribe y cuando se las lee.
Pero la cruda verdad que los críticos debemos enfrentar es que, en términos generales, la producción de basura promedio es más valiosa que lo que nuestros artículos pretenden señalar. Sin embargo, a veces el crítico realmente arriesga algo, y eso sucede en nombre y en defensa de algo nuevo.</p>
<br/>
<p>Anoche experimenté algo nuevo, una comida extraordinaria hecha por alguien único e inesperado. Decir que ese plato y su cocinero pusieron a prueba mis preconceptos equivaldría a incurrir en una subestimación grosera, cuando lo cierto es que ambos lograron conmover lo más profundo de mi ser.</p>
<br/>
<p>Antes de este suceso, nunca escondí mi desdén por el lema del Chef Gusteau: “cualquiera puede cocinar”. Pero, me doy cuenta, recién ahora comprendo sus palabras. No cualquiera puede convertirse en un gran artista, pero un gran artista sí puede provenir de cualquier lugar.
<br/>
                        </p>
                    </div>
                    : true}
            </section>
        </div>
    )
} 