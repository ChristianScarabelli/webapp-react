import { Link } from "react-router-dom";
import Placeholder from "../assets/card-placeholder.jpg";

export default function Card({ data }) {
    const { id, title, director, image, genre, release_year, abstract, avg_vote } = data;

    return (
        <div className="card h-100">
            <img
                src={image ? image : Placeholder}
                className="card-img img-fluid h-100"
                style={{ objectFit: "cover" }}
            />
            <div className="card-img-overlay d-flex flex-column justify-content-end">
                <h5 className="card-title text-white mb-1 mt-auto">{title}</h5>
                <h6 className="card-title text-white-50 mb-2">{director}</h6>
                <div className="d-flex gap-2 text-white-50">
                    <small>{release_year}</small>
                    <small>{genre}</small>
                </div>
                <p className="card-text text-white mt-2">
                    {abstract}
                </p>
                <span className="badge bg-primary mb-3">{avg_vote}</span>
                <Link to={`/api/books/${id}`} className="btn btn-light btn-sm">
                    See more
                </Link>
            </div>
        </div>
    );
}
