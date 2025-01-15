import { useContext, useState } from "react"
import axios from "axios"
import GlobalContext from "../contexts/GlobalContext"

// oggetto per i dati base del form
const initialFormData = {
    name: '',
    text: '',
    vote: '1',
}


// i dati sono nell'elemento padre (pagina SHOW, quindi li passerò come props)
// l'id verrà da useParams() e onSuccess() conterrà la funzione di fetch del movie
export default function ReviewForm({ id, onSucces = () => { } }) {

    const { isLoading, setIsLoading } = useContext(GlobalContext)

    // stato per gestire/prendere i dati dal form  (di default con campi vuoti/oggetto vuoto)
    const [formData, setFormData] = useState(initialFormData)

    // stato per determinare se il form è valido ed è stato inviato  (true di default)
    // utile per gli stili
    const [isFormValid, setIsFormValid] = useState(true)

    // stato per il messaggio di errore specifico per gli input del form
    const [errorMessage, setErrorMessage] = useState('')

    // funzione per aggiornare lo stato dei dati del form, (agli eventi degli input da parte dell'utente)
    function handleFormData(event) {
        // collego l'evento con le proprietà value e name degli input
        const { value, checked, type, name } = event.target

        // aggiorno lo stato dei dati del form (originari + i nuovi)
        // collego proprietà name con valore value
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
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

        // VALIDAZIONE dell'oggetto 'data' prima che venga inviato con il POST
        // se esito negativo blocco la chiamata e genero messaggio di errore
        if (!data.vote || data.vote < 1 || data.vote > 5) {
            console.log('Form is invalid!')
            setIsFormValid(false)
            setErrorMessage('Vote must be a number between 1 and 5')
            return
        }

        if (!data.name || data.name.trim() === '') {
            console.log('Form is invalid!')
            setIsFormValid(false)
            setErrorMessage('Name is required')
            return
        }

        if (!data.text || data.text.trim() === '') {
            console.log('Form is invalid!')
            setIsFormValid(false)
            setErrorMessage('Review is required')
            return
        }

        // setto a true prima della chiamata 
        // (con la funzione onSuccess() nel then è già a true e viene anche reimpostata a false)
        // solo in caso di errori si mette a false (nel catch), 
        // per far ritornare la superficie cliccabile
        // e per mostrare subito lo spinner senza effetto ritardato dall'attesa della chiamata
        setIsLoading(true)

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
                setIsLoading(false)
            })
    }


    return (
        <div className="container">
            <form onSubmit={storeReview} className="row g-3 border rounded p-3">
                <div className="col-12 card-header text-center border-bottom">
                    <h4 className='mb-4'>Write your reviews</h4>
                </div>
                <div className="d-flex align-items-center">
                    <span className="form-label ms-auto text-muted" style={{ fontSize: '0.8em' }}>Fields required *</span>
                </div>
                <div className="col-12">
                    <label htmlFor="name" className="form-label">Name *</label>
                    <input
                        required
                        minLength='1'
                        maxLength='255'
                        type="text"
                        id="name"
                        name='name'
                        value={formData.name}
                        onChange={handleFormData}
                        aria-invalid={!isFormValid}
                        className="form-control"
                        placeholder="Write your name..." />
                </div>
                <div className="col-12">
                    <label htmlFor="text" className="form-label">Review</label>
                    <textarea
                        required
                        id="text"
                        name='text'
                        value={formData.text}
                        onChange={handleFormData}
                        aria-invalid={!isFormValid}
                        className="form-control"
                        rows="3"
                        placeholder='Write your review here...'>
                    </textarea>
                </div>
                <div className="col-md-4">
                    <label htmlFor="vote" className="form-label">Rating *</label>
                    <select
                        required
                        min='1'
                        max='5'
                        id="vote"
                        name='vote'
                        value={formData.vote}
                        onChange={handleFormData}
                        aria-invalid={!isFormValid}
                        className="form-select">
                        <option value=''>Choose...</option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                </div>
                <div className="col-12 d-flex align-items-center">
                    {!isFormValid && errorMessage && (
                        <span className="text-danger animate__animated animate__headShake animate__fast animate__repeat-1 1">The data are not correct!</span>
                    )}
                    <button disabled={isLoading} className="btn btn-primary ms-auto">{isLoading ? 'Publishing...' : 'Publish'}</button>
                </div>
            </form>
        </div>
    )
}