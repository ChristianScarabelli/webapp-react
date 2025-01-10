import StarsVote from "./StarsVote"

export default function ReviewCard({ review }) {

    // destrutturo la prop review che mi arriverà dal map delle reviews dell'oggetto movie(per id)
    const { vote, text, name } = review

    return (
        <div className="card">
            <div className="card-header">
                <StarsVote style={{ width: "24px", height: "24px" }} vote={vote} />
            </div>
            <div className="card-body">
                <blockquote className="blockquote mb-0">
                    <p>{text}</p>
                    <footer className="blockquote-footer">{name}</footer>
                </blockquote>
            </div>
        </div>
    )
}