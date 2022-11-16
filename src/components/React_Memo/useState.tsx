import React, {useState} from 'react'


export const ExampleUseState = () => {
    const [counter, setCounter] = useState(0)


    return <>
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        {counter}
    </>
}