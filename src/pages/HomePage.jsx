import Card from "../components/Card"
import { useState, useEffect } from "react"
import axios from "axios"


export default function HomePage() {

    // url base
    const BASE_URI = 'http://localhost:3000'

    // stato per i movies
    const [movies, setMovies] = useState([])

    // stato per la ricerca
    const [search, setSearch] = useState('')

    // fetch dei movies (con params search per il filtro)
    function fetchMovies() {
        axios.get(`${BASE_URI}/api/movies`, {
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
                <h2 className="text-center">Movies list</h2>
                <div>
                    <form onSubmit={searchMovies}>
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                        <button className="btn">Cerca</button>
                    </form>
                </div>
                <section>
                    {movies.length ? <ul>
                        {
                            movies.map(movie => {
                                return <li key={movie.id}>
                                    <Card data={movie}></Card>
                                </li>
                            })
                        }
                    </ul>
                        :
                        <div>
                            Nessun risultato
                        </div>
                    }
                </section>
            </main>
        </>
    )
}