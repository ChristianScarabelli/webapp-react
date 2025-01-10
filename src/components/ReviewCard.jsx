export default function ReviewCard({ review }) {

    // destrutturo la prop review che mi arriverà dal map delle reviews dell'oggetto movie(per id)
    const { vote, text, name } = review

    return (
        <div class="card">
            <div class="card-header">
                {vote}
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>{text}</p>
                    <footer class="blockquote-footer">{name}</footer>
                </blockquote>
            </div>
        </div>
    )
}