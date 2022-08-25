import {useState, useEffect} from 'react'

function useLocalStorage(initial, key) {
    const getVal = () => {
        const storage = localStorage.getItem(key)
        if (storage) {
            return JSON.parse(storage)
        }
        // localStorage.setItem(key, JSON.stringify(initial))
        return initial
    }
    const [value, setValue] = useState(getVal)

    // const setValueStorage = useCallback((value) => {
    //     setValue(value)
    //     localStorage.setItem(key, JSON.stringify(value))
    // })

    // Async?
    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value])

    return [value, setValue]
}