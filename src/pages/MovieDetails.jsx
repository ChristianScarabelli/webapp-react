const movie = {
    "id": 1,
    "title": "Inception",
    "director": "Christopher Nolan",
    "genre": "Science Fiction",
    "release_year": 2010,
    "abstract": "A skilled thief is given a chance at redemption if he can successfully perform inception.",
    "image": "http://localhost:3000/movies_cover/inception.jpg",
    "created_at": "2024-11-29T10:40:13.000Z",
    "updated_at": "2025-01-09T20:56:19.000Z",
    "avg_vote": "4.0000",
    "reviews": [
        {
            "id": 1,
            "movie_id": 1,
            "name": "Alice",
            "vote": 5,
            "text": "A mind-bending masterpiece.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 2,
            "movie_id": 1,
            "name": "Bob",
            "vote": 4,
            "text": "Great visuals and a compelling story.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        },
        {
            "id": 3,
            "movie_id": 1,
            "name": "Charlie",
            "vote": 3,
            "text": "Confusing at times, but worth watching.",
            "created_at": "2024-11-29T10:40:13.000Z",
            "updated_at": "2024-11-29T10:40:13.000Z"
        }
    ]
}

import PlaceHolder from '../assets/card-placeholder.jpg'
import ReviewCard from '../components/ReviewCard'

export default function MovieDetails() {
    return (
        <>
            <section className="mt-4">
                <div className="container d-flex align-items-start gap-3">
                    <figure>
                        <img src={movie.image ? movie.image : PlaceHolder} className="img-fluid" style={{ maxWidth: '225px' }} />
                    </figure>
                    <div className='d-flex flex-column gap-2'>
                        <h2>{movie.title}</h2>
                        <h5 className=" ">{movie.director}</h5>
                        <div className="d-flex gap-2">
                            <small>{movie.release_year}</small>
                            <small>{movie.genre}</small>
                        </div>
                        <p>{movie.abstract}</p>
                    </div>
                </div>
            </section>
            <section>
                <div className="container my-2 d-flex align-items-center justify-content-between">
                    <h2>Reviews</h2>
                    <div>
                        <strong>Media: {movie.avg_vote}</strong>
                    </div>
                </div>
                <div className='container my-3'>
                    <ReviewCard />
                </div>
            </section>
        </>
    )
}