import { Link } from "react-router-dom";
import Placeholder from "../assets/card-placeholder.jpg";

export default function Card({ data }) {
    const { id, title, image, abstract, avg_vote } = data;

    return (
        <div className="card h-100">
            <img
                src={image ? image : Placeholder}
                className="card-img img-fluid h-100"
                style={{ objectFit: "cover" }}
            />
            <div className="card-img-overlay p-0 d-flex flex-column justify-content-end">
                <div className="p-3 rounded-bottom" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
                    <h5 className="card-title text-white mb-2">{title}</h5>
                    <p className="card-text text-white mt-2 d-xs-block d-sm-none d-lg-block text-truncate">
                        {abstract}
                    </p>
                    <div className="d-flex flex-column g-2 align-items-center">
                        <span className="badge bg-primary mb-3 align-self-start">{avg_vote}</span>
                        <Link to={`/api/movies/${id}`} className="btn btn-primary btn-sm align-self-start">
                            See more
                        </Link>
                    </div>

                </div>

            </div>
        </div>
    );
}
