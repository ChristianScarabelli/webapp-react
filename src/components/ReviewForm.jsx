import axios from "axios"
import { useState } from "react"

// oggetto per i dati base del form
const initialFormData = {
    name: '',
    text: '',
    vote: '1',
}


// i dati sono nell'elemento padre (pagina SHOW, quindi li passerò come props)
// l'id verrà da useParams() e onSuccess() conterrà la funzione di fetch del movie
export default function ReviewForm({ id, onSucces = () => { } }) {

    // stato per prendere i dati dal form  (di default con campi vuoti/oggetto vuoto)
    const [formData, setFormData] = useState(initialFormData)

    // stato per la validità del form, che ne determina l'invio (true di default)
    const [isFormValid, setIsFormValid] = useState(true)

    // funzione per collegare value e name degli input del form con l'evento
    function handleFormData(event) {
        const { value, name: inputName } = event.target

        // aggiorno lo stato dei dati del form 
        // con il nuovo valore derivato dagli input dell'utente
        setFormData({
            ...formData,
            [inputName]: value
        })
    }

    // funzione per inserire la review dal submit form
    // con AXIOS POST
    function storeReview(e) {
        e.preventDefault()
        setIsFormValid(true) // setto a true l'invio
        const data = {
            ...formData,
            vote: parseInt(formData.vote)
        }

        // invio l'oggetto data alla rotta 
        axios.post(`${import.meta.env.VITE_API_URL}/movies/${id}/reviews`, data)
            .then(res => {
                // se l'esito della chiamata è positivo 
                // - reFetch del libro con la prop callback onSucces
                // - reset del form
                onSucces()
                setFormData(initialFormData)
            })
            .catch(err => {
                console.log(err)
                // se l'eisto è negativo blocco l'invio
                setIsFormValid(false)
            })
    }


    return (
        <div className="container">
            <h4 className='mb-4'>Write your reviews</h4>
            <form onSubmit={storeReview} className="row g-3 border rounded p-3">
                <div className="col-12">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name='name'
                        value={formData.name}
                        onChange={handleFormData}
                        className="form-control"
                        placeholder="Write your name..." />
                </div>
                <div className="col-12">
                    <label htmlFor="text" className="form-label">Review</label>
                    <textarea
                        id="text"
                        name='text'
                        value={formData.text}
                        onChange={handleFormData}
                        className="form-control"
                        rows="3"
                        placeholder='Write your review here...'>
                    </textarea>
                </div>
                <div className="col-md-4">
                    <label htmlFor="vote" className="form-label">Rating</label>
                    <select
                        id="vote"
                        name='vote'
                        value={formData.vote}
                        onChange={handleFormData}
                        className="form-select">
                        <option value=''>Choose...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
                <div className="col-12">
                    <button className="btn btn-primary">Publish</button>
                </div>
            </form>
        </div>
    )
}