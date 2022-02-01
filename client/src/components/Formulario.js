import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postRes } from "../services";
import { Optener } from "../store/actions";

import './css/formulario.css'

export default function Formulario() {
    const dispatch = useDispatch();
    let histori = useNavigate();
    var error = false;
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
    if (inputs.healthScore > 100 || inputs.healthScore < 1) {
        error = true
    }
    var urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;



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
    //postRes({ ...inputs, pasos })
    return (
        <form
            className="formulario"
            onSubmit={e => {
                e.preventDefault()
            }}>
            <div className="input">
                <label>
                    nombre del creador:
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
                    nombre de la receta:
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
                    <p>Descripcion de la receta</p>
                    <textarea
                        type='text'
                        name="summary"
                        autoComplete="off"
                        onChange={e => setState(e)}
                        placeholder="Descripcion de la receta:"
                        style={{ width: "600px", height: "250px" }}
                    />
                </label>
                <br />
                <label>
                    {!urlregex.test(inputs.image) ? <p style={{ color: "red", 'font-size': "13px" }}> !!...la imagen tiene q ser una URL</p> : true}
                    url de la imagen:
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
                    puntuacion de salud:
                    {error ? <p style={{ color: "red", 'font-size': "13px" }}> !!... la puntuacion no puede ser negativa o mayor a 100</p> : true}
                    <input
                        type='number'
                        name="healthScore"
                        autoComplete="off"
                        min="1" max="100"
                        onChange={e => setState(e)}
                        placeholder="puntuacion de saludable (1/100):"
                    />
                    <b>(1/100)</b>
                </label>
            </div>
            <div className="pasos">
                <h3>Pasos para la preparacion de la receta</h3>
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
                >+</button>
                <span>{"<--"}Agregar un paso</span>
            </div>


            <div className="diets" >
                {dietas.map(d => (
                    <div
                        key={d.id}
                        className={inputs.check[d.nombre] ? 'activo' : 'inactivo'}
                    >

                        {inputs.check[d.nombre] ?
                            <div>
                                <input
                                    name={d.nombre}
                                    type="button"
                                    value='X'
                                    onClick={e => setState(e)}
                                />
                                {d.descripcion}

                            </div>
                            : <div>
                                <input
                                    name={d.nombre}
                                    type="button"
                                    value={d.nombre}
                                    onClick={e => setState(e)}
                                />
                            </div>}
                    </div>
                ))}
            </div>

            <br />
            <br />
            <br />
            <button
                className="boton"
                type='submit'
                value='Crear ...'
                onClick={e => {
                    postRes({ ...inputs, pasos });
                    dispatch(Optener())
                    histori('/recipes');
                }}
            >Agregar receta</button>
            <br />
            <br />
            <br />
        </form >
    )
}