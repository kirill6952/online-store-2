import {useEffect, useState} from "react";


export function useLocalStorage(key, initialValue) {

    // eslint-disable-next-line no-undef
    const [value, setValue] = useState(() => {
        const jsonValue = localStorage.getItem(key);
        if (jsonValue != null) return JSON.parse(jsonValue)
        else {
            return initialValue;
        }
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value])
    return [value, setValue];

}