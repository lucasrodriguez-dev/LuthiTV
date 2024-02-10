import React, { useEffect, useState } from 'react'
import { nombreLocalStorage } from '../Constantes';
import { Editar } from './Editar';

export const Listado = ({ listado, setListado }) => {

    const [peliculaAEditar, setPeliculaAEditar] = useState(null);

    useEffect(() => {
        conseguirPeliculas();
    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem(nombreLocalStorage));
        setListado(peliculas);
        return peliculas;
    }

    const borrarPelicula = id => {
        let peliculasGuardadas = conseguirPeliculas();
        let peliculasQueSeQuedan = peliculasGuardadas.filter(pelicula => pelicula.id !== parseInt(id));
        setListado(peliculasQueSeQuedan);
        localStorage.setItem(nombreLocalStorage, JSON.stringify(peliculasQueSeQuedan));
    }

    return (
        <>
            {/*Si hay listado, lo muestro*/}
            {listado
                ?
                (listado.map((pelicula) => {
                    return (
                        <article key={pelicula.id} className="peli-item">
                            <h3 className="title">{pelicula.titulo}</h3>
                            <p className="description">{pelicula.descripcion}</p>
                            <button className="edit" onClick={() => setPeliculaAEditar(pelicula.id)}>Editar</button>
                            <button className="delete" onClick={() => borrarPelicula(pelicula.id)}>Eliminar</button>
                            {/*Si aprieta el botón para editar la película, le mostramos el componente Editar*/}
                            {peliculaAEditar === pelicula.id &&
                                <Editar
                                    pelicula={pelicula}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setPeliculaAEditar={setPeliculaAEditar}
                                    setListado={setListado}
                                />}
                        </article>
                    );
                })
                )
                : <h2>No hay pelis :(</h2>}
            {/*Si no hay listado, muestro un mensaje*/}
        </>
    )
}
