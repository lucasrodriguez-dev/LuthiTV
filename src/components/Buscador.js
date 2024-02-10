import React, { useEffect, useState } from 'react'
import { nombreLocalStorage } from '../Constantes';

export const Buscador = ({ listado, setListado }) => {

    const [busqueda, setBusqueda] = useState("");
    const [noEncontrado, setNoEncontrado] = useState(false);

    useEffect(() => {

        //Filtramos las películas
        let peliculasEncontradas = listado.filter(pelicula => {
            return pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase());
        });

        //Si no hay coincidencias, dejamos el listado tal cual como estaba
        if (busqueda.length < 1 || peliculasEncontradas <= 0) {
            peliculasEncontradas = JSON.parse(localStorage.getItem(nombreLocalStorage));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        }

        //Actualizamos el estado del listado de películas
        setListado(peliculasEncontradas);

    }, [busqueda]);

    const buscarPelicula = e => {
        //Actualizamos el estado de búsqueda
        setBusqueda(e.target.value);
    };

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {(noEncontrado && busqueda.length > 1) &&
                (<span className="no-encontrado">No se encontraron coincidencias</span>)
            }
            <form>
                <input
                    type="text"
                    id="search_field"
                    name="buscar"
                    autoComplete='off'
                    value={busqueda}
                    onChange={buscarPelicula}
                />
            </form>
        </div>
    )
}
