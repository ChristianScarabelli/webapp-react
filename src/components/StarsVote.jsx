
import { StarIcon as StarEmpty } from "@heroicons/react/24/outline"
import { StarIcon as StarSolid } from "@heroicons/react/24/solid"

// className = 'w-25 h-25 text-warning'
// prop classname con stili di defautl
// per personalizzare il font nei vari punti in cui è inserito il componente
// className += ' fs-3'

export default function StarsVote({ vote = 0, style = {} }) {

    // oggetto vuoto con le key/classi di stile default
    const defaultIconStyle = { color: '#ecc55c', width: '32px', height: '32px', }

    // oggetto con stile di default e stile che sarà passato come props quando si usa il componente
    const iconStyle = { ...defaultIconStyle, ...style }

    return (
        new Array(5).fill(null).map((_, i) => {
            return i < vote ?
                <StarSolid key={i} style={iconStyle} /> :
                <StarEmpty key={i} style={iconStyle} />
        })
    )
}
