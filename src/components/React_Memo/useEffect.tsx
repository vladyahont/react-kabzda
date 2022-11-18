import React, {useEffect, useState} from 'react'


export const SimpleExampleUseEffect = () => {

    console.log('ExampleUseEffect')

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(0)

    useEffect( () => {
        console.log('use every time')
        document.title = counter.toString()
    })

    useEffect( () => {
        console.log('use only first render')
        document.title = counter.toString()
    }, [])

    useEffect( () => {
        console.log('use every time when counter will be changed')
        document.title = counter.toString()
    }, [counter])

    return <>

        Hello, {counter}
        <button onClick={() => {setCounter(counter + 1)}}>+</button>
        Hello, {fake}
        <button onClick={() => {setFake(fake + 1)}}>+</button>
        {counter}
    </>
}

