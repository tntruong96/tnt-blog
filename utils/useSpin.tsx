import { useEffect, useState } from "react"

export const useSpin = () => {
    const [spining, setSpining] = useState<boolean>(false)
    const spin = window.localStorage.getItem('spin');

    useEffect(() => {
        console.log(spin);
        // setSpining(spining)
    }, [spin]);

    return [spining, setSpining];
}