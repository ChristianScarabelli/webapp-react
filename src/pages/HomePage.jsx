import Card from "../components/Card"
import { useState, useEffect } from "react"
import axios from "axios"


export default function HomePage() {

    // stato per i movies
    const [movies, setMovies] = useState([])

    // stato per la ricerca
    const [search, setSearch] = useState('')

    // fetch dei movies (con params search per il filtro)
    function fetchMovies() {
        axios.get(`${import.meta.env.VITE_API_URL}/movies`, {
            params: {
                search: search
            }
        })
            .then(res => {
                setMovies(res.data)
            })
            .catch(err => {
                console.error(err)
            })
    }

    // funzione per barra ricerca con filtri
    function searchMovies(e) {
        e.preventDefault()
        fetchMovies()
    }

    // fetchMovies solo al primo rendering
    useEffect(() => {
        fetchMovies()
    }, [])

    return (
        <>
            <main className="bg-light p-3">
                <div className="container">
                    <div className="d-flex align-items-center justify-content-between py-3">
                        <h2 className="my-3">Movies list</h2>
                        <form onSubmit={searchMovies} className="d-flex gap-3">
                            <input
                                type="text"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <button className="btn btn-primary">Cerca</button>
                        </form>
                    </div>
                    <section>
                        {movies.length ? (
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                                {movies.map((movie) => (
                                    <div key={movie.id} >
                                        <Card data={movie} />
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center">Nessun risultato</div>
                        )}
                    </section>
                </div>
            </main>
        </>
    )
}