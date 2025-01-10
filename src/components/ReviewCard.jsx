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

export default function ReviewCard() {
    return (
        <div class="card">
            <div class="card-header">
                {movie.avg_vote}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{movie.abstract}</p>
                    <footer class="blockquote-footer">{movie.reviews.name} Charlie</footer>
                </blockquote>
            </div>
        </div>
    )
}