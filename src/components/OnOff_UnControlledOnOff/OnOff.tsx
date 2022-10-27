import React, {useState} from 'react';

type PropsType = {
    on: boolean
    onChange: (on: boolean) => void
}


export const OnOff = (props: PropsType) => {

    const onStyle = {
        width: '25px',
        height: '17px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '25px',
        height: '17px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        background: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: props.on ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={() => props.onChange(true)}>On
            </div>
            <div style={offStyle} onClick={() => props.onChange(false)}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}