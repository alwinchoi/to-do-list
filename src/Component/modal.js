import "../css/modal.css"

import { useEffect } from "react";

const Modal = props => {

    useEffect(() => {
        const closeOnEscapeKey = e => e.key === "Escape" || e.key === "Esc" ? props.handleClose() : null

        document.body.addEventListener("keydown", closeOnEscapeKey)
        return () => {
            document.body.removeEventListener("keydown", closeOnEscapeKey)
        }
    }, [props.handleClose])

    if (!props.isOpen) return null

    return (
        <div className="modal">
            <div className="modal-content">
                <button onClick={props.handleClose} className="close-btn">
                    X
                </button>
                {props.children}
            </div>
        </div>
    )
}

export default Modal