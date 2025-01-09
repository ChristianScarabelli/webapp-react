import { Link } from "react-router-dom"

export default function Card({ data }) {

    const { id, title, director, image, genre, release_year, abstract, avg_vote } = data
    return (
        <div>
            <div className="card text-bg-dark">
                <img src={image} className="card-img" />
                <div className="card-img-overlay">
                    <h5 className="card-title">{title}</h5>
                    <h6 className="card-title">{director}</h6>
                    <span className="card-text"><small>{release_year}</small></span>
                    <span className="card-text"><small>{genre}</small></span>
                    <p className="card-text">{abstract}</p>
                    <span className="card-text">{avg_vote}</span>
                    <Link to={`/api/books/${id}`} className="btn">See more</Link>
                </div>
            </div>
        </div>
    )
}