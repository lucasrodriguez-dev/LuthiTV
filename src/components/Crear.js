import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';
import { nombreLocalStorage } from '../Constantes';

export const Crear = ({ setListado }) => {

    const titulo = "Añadir película";
    const [pelicula, setPelicula] = useState({
        titulo: "",
        descripcion: ""
    });

    const conseguirDatos = e => {
        e.preventDefault();
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }
        setPelicula(peli);

        //Actualizamos el estado del listado de películas
        setListado(elementos => {
            //Asignándole los elementos que ya están, más la nueva película al final
            return [...elementos, peli];
            //return [peli, ...elementos]; Agrega la nueva película al principio
        });

        GuardarEnStorage(nombreLocalStorage, peli);
    }



    return (
        <div className="add">
            <h3 className="title">{titulo}</h3>
            <form onSubmit={conseguirDatos}>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    placeholder="Título"
                />
                <textarea
                    id="descripcion"
                    name="descripcion"
                    placeholder="Descripción"
                >

                </textarea>
                <input
                    id="guardar"
                    type="submit"
                    value="Guardar"
                />
            </form>
        </div>
    )
}
