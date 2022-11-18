import React, {useEffect, useState} from "react";

export const SetTimeoutExample = () => {

    console.log('SetTimeoutExample')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(0)

    useEffect( () => {
        setInterval( () => {
            setCounter(counter + 1)
        }, 2000)
    }, [counter])



    return <>

        Hello, {counter}
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        Hello, {fake}
        <button onClick={() => {setFake(fake + 1)}}>+</button>

    </>
}