import React, {useEffect, useState} from "react";

export const SetTimeHomeWork = () => {

    console.log('SetTimeoutExample')

    let [hours, setHours] = useState(new Date().getHours())
    let [minutes, setMinutes] = useState(new Date().getMinutes())
    let [seconds, setSeconds] = useState(new Date().getSeconds())

    useEffect( () => {

    }, [seconds])

    useEffect( () => {

    }, [minutes])

    useEffect( () => {

    }, [hours])


    return <>
    <h4>{hours}:{minutes}:{seconds}</h4>
    </>

}