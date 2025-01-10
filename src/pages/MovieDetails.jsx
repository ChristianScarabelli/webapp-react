import { Link, useNavigate, useParams } from 'react-router-dom'
import PlaceHolder from '../assets/card-placeholder.jpg'
import ReviewCard from '../components/ReviewCard'
import { useEffect, useState } from 'react'
import axios from 'axios'

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
                        <img src={movie.image ? movie.image : PlaceHolder} className="img-fluid" style={{ maxWidth: '225px' }} />
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
                    <div>
                        <strong>Media: {movie.avg_vote}</strong>
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
                <div className="container">
                    <h4>Write your reviews</h4>
                    <form className="row g-3">
                        <div className="col-12">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" placeholder="Write your name..." />
                        </div>
                        <div className="col-12">
                            <label htmlFor="review" className="form-label">Review</label>
                            <textarea className="form-control" id="review" rows="3" placeholder='Write your review here...'></textarea>
                        </div>
                        <div className="col-md-4">
                            <label htmlFor="rating" className="form-label">Rating</label>
                            <select id="rating" className="form-select">
                                <option selected>Choose...</option>
                                <option value='1'>1</option>
                                <option value='2'>2</option>
                                <option value='3'>3</option>
                                <option value='4'>4</option>
                                <option value='5'>5</option>
                            </select>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary">Sign in</button>
                        </div>
                    </form>
                </div>
            </section>

        </> :
            <div>Loading movie...</div>
    )
}