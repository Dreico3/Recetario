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

    console.log(offset);
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
                        <h1>esto es home perras</h1>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aspernatur mollitia exercitationem voluptatibus tempora eos accusantium, delectus laudantium, magni suscipit similique porro cupiditate quas voluptatem non aperiam fugit ex hic.
                        </p>
                    </div>
                    : true}
            </section>
        </div>
    )
} 