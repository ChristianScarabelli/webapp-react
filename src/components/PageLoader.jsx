import { ArrowPathIcon as Spinner } from "@heroicons/react/24/solid"

export default function PageLoader() {
    return (
        <div className="d-flex justify-content-center align-items-center position-fixed top-0 left-0 w-100 h-100" style={{ backgroundColor: 'rgba(1,1,1,0.3)' }}>
            <Spinner className="text-primary animate__animated animate__rotateOut animate__infinite infinite " style={{ width: '80px', height: '80px' }} />
        </div>
    )
}
