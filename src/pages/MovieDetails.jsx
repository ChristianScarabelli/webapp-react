import { useNavigate, useParams } from 'react-router-dom'
import PlaceHolder from '../assets/card-placeholder.jpg'
import ReviewCard from '../components/ReviewCard'
import { useEffect, useState } from 'react'
import axios from 'axios'
import StarsVote from '../components/StarsVote'
import ReviewForm from '../components/ReviewForm'

export default function MovieDetails() {

    // recupero l'id
    const { id } = useParams()

    const navigate = useNavigate()

    // stato per il singolo movie per id, null di default
    const [movie, setMovie] = useState(null)

    // funzione di fetch per il movie
    function fetchMovie() {
        axios.get(`${import.meta.env.VITE_API_URL}/movies/${id}`)
            .then(res => {
                setMovie(res.data)
            })
            .catch(err => {
                console.error(err)
                // reindirizzo alla pagina 404
                navigate('*')
            })
    }

    // rendering dipendente dal cambio dell'id
    useEffect(() => {
        fetchMovie()
    }, [id])

    return (
        movie ? <>
            <section className="mt-4">
                <div className='container mb-4'>
                    <button onClick={() => navigate(-1)} className='btn btn-primary btn-sm'>Go back</button>
                </div>
                <div className="container d-flex align-items-start gap-4">
                    <figure>
                        <img src={movie.image ? movie.image : PlaceHolder} className="img-fluid rounded" style={{ maxWidth: '225px' }} />
                    </figure>
                    <div className='d-flex flex-column gap-2'>
                        <h2>{movie.title}</h2>
                        <h5 className=" ">{movie.director}</h5>
                        <div className="d-flex gap-2 text-muted">
                            <small>{movie.release_year}</small>
                            <small>{movie.genre}</small>
                        </div>
                        <p>{movie.abstract}</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container my-3 d-flex align-items-center justify-content-between">
                    <h3>Reviews</h3>
                    <div className='d-flex flex-row align-items-center'>
                        <strong className='me-3'>Vote: </strong>
                        <StarsVote style={{ width: "32px", height: "32px" }} vote={movie.avg_vote} />
                        <span>({movie.reviews.length})</span>
                    </div>
                </div>
                {movie.reviews.length ?
                    <ul className='container d-flex flex-column gap-5 my-4'>
                        {movie.reviews.map(review => (
                            <ReviewCard review={review} key={review.id} />
                        ))}
                    </ul> :
                    <div>Nessuna recensione</div>
                }
            </section>
            <section className='my-5'>
                <ReviewForm id={id} onSucces={fetchMovie} />
            </section>
        </> :
            <div>Loading movie...</div>
    )
}