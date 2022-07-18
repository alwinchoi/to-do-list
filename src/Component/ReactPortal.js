import { useLayoutEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const ReactPortal = (props, wrapperId = "react-portal-wrapper") => {
    const [wrapperElement, setWrapperElement] = useState(null)

    useLayoutEffect(() => {
        let systemCreated = false
        let element = document.getElementById(wrapperId)

        if (!element) {
            systemCreated = true
            element = createWrapperAndAppend(wrapperId)
        }

        setWrapperElement(element)

        return () => {
            if (systemCreated && element.parentNode) {
                element.parentNode.removeChild(element)
            }
        }

    }, [wrapperId])

    if (wrapperId === null) return null

    const createWrapperAndAppend = wrapperId => {
        const element = document.createElement('div')
        element.setAttribute("id", wrapperId)
        document.body.appendChild(element)
        return element
    }

    return createPortal(props.children, wrapperElement)
}

export default ReactPortal