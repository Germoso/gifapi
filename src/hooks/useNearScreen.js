import { useState, useEffect, useRef } from "react"

const useNearScreen = () => {
    const [show, setShow] = useState(false)
    const ref = useRef()
    useEffect(() => {
        const onIntersect = (entries) => {
            if (entries[0].isIntersecting) {
                setShow(true)
                observer.disconnect()
                console.log("Is intersecting")
            }
        }
        const observer = new IntersectionObserver(onIntersect)

        observer.observe(ref.current)
    })
    return [show, ref]
}

export { useNearScreen }
