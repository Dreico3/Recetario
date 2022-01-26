import React from "react";
import { useSelector } from "react-redux";
import { postRes } from "../services";

import './css/formulario.css'

export default function Formulario() {
    const [aux, setAux] = React.useState([""]);
    const [pasos, setPasos] = React.useState({});
    const dietas = useSelector(state => state.dietas);
    const [inputs, setInputs] = React.useState({
        sourceName: '',
        title: '',
        summary: '',
        image: '',
        healthScore: 0,
        check: {
            'Sin gluten': false,
            cetogénico: false,
            Vegetariano: false,
            'Lacto vegetariana': false,
            'Ovo-Vegetariano': false,
            Vegano: false,
            pescetariano: false,
            Paleo: false,
            Primitivo: false,
            'FODMAP bajo': false,
            Entero30: false,
        }

    })

    const setState = (e) => {
        const nam = e.target.name;
        const type = e.target.type;
        var value = '';
        if (type === 'button') {
            if (inputs.check[nam]) value = false;
            else value = true;
            setInputs({
                ...inputs,
                check: {
                    ...inputs.check,
                    [e.target.name]: value
                }
            })
        } else {
            value = e.target.value;
            setInputs({
                ...inputs,
                [nam]: value
            })
        }
    }

    return (
        <form onSubmit={e => {
            e.preventDefault()
        }}>
            <div className="input">
                <label>
                    <input
                        type='text'
                        name="sourceName"
                        autoComplete="off"
                        onChange={e => setState(e)}
                        placeholder="Nombre del chef:"
                    />
                </label>
                <br />
                <label>
                    <input
                        type='text'
                        name="title"
                        autoComplete="off"
                        onChange={e => setState(e)}
                        placeholder="titulo de la receta:"
                    />
                </label>
                <br />
                <label>
                    <textarea
                        type='text'
                        name="summary"
                        autoComplete="off"
                        onChange={e => setState(e)}
                        placeholder="Descripcion de la receta:"
                    />
                </label>
                <br />
                <label>
                    <input
                        type='text'
                        name="image"
                        autoComplete="off"
                        onChange={e => setState(e)}
                        placeholder="URl de la imagen"
                    />
                </label>
                <br />
                <label>
                    <input
                        type='number'
                        name="healthScore"
                        autoComplete="off"
                        onChange={e => setState(e)}
                        placeholder="puntuacion de saludable (1/100):"
                    />
                </label>
            </div>
            <div className="pasos">
                <h3 style={{ color: "white" }}>Pasos para la preparacion de la receta</h3>
                {
                    aux.map((n, i) => (
                        /* setInputs({
                            ...inputs,
                            check: {
                                ...inputs.check,
                                [e.target.name]: value
                            }
                        }) */
                        < textarea
                            key={i}
                            name={i}
                            placeholder="Paso 30: este paso es el ultimo?"
                            onChange={e => {
                                //aux[i]=e.target.value;
                                //setAux([...aux,aux[i]=e.target.value])
                                setPasos({ ...pasos, [i]: e.target.value })
                            }}
                        />
                    ))
                }

                <button
                    onClick={e => {
                        setAux([...aux, ""])
                    }}
                >Agregar un paso mas</button>
            </div>


            <div className="diets" >
                {dietas.map(d => (
                    <div
                        key={d.id}
                        className={inputs.check[d.nombre] ? 'activo' : 'inactivo'}
                    >
                        <h3>{d.nombre}</h3>
                        <p>{d.descripcion}</p>
                        <input
                            name={d.nombre}
                            type="button"
                            value={d.nombre}
                            onClick={e => setState(e)}
                        />
                    </div>
                ))}
            </div>

            <input
                type='button'
                value='Crear ...'
                onClick={e=>postRes({...inputs,pasos})}
            />
        </form >
    )
}