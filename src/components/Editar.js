import React from 'react'
import { nombreLocalStorage } from '../Constantes';

export const Editar = ({pelicula, conseguirPeliculas, setPeliculaAEditar, setListado}) => {

    const titulo = "Editar película";

    const actualizar = (e, id) => {
        e.preventDefault();
        const peliculasGuardadas = conseguirPeliculas();

        //Obtenemos el índice de la película editada
        const indice = peliculasGuardadas.findIndex(pelicula => pelicula.id === id);
        
        let target = e.target;
        let nuevoTitulo = target.titulo.value;
        let nuevaDescripcion = target.descripcion.value;
        let peliculaActualizada = {
            id,
            titulo: nuevoTitulo,
            descripcion: nuevaDescripcion
        };
        
        //Actualizamos la película editada
        peliculasGuardadas[indice] = peliculaActualizada;

        //Guardamos los cambios en local storage
        localStorage.setItem(nombreLocalStorage, JSON.stringify(peliculasGuardadas));

        //Actualizamos los estados
        setListado(peliculasGuardadas);
        setPeliculaAEditar(null);
    }

    return (
        <div className="edit_form">
            <h4 className="title">{titulo}</h4>
            <form onSubmit={e => actualizar(e, pelicula.id)}>
                <input
                    type="text"
                    name="titulo"
                    className="titulo_editado"
                    defaultValue={pelicula.titulo}
                />
                <textarea
                    name="descripcion"
                    defaultValue={pelicula.descripcion}
                    className="descripcion_editada"
                ></textarea>
                <input
                    type="submit"
                    value="Actualizar"
                />
            </form>
        </div>
    )
}
