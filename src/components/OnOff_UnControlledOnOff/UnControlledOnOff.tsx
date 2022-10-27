import React, {useState} from 'react';

type PropsType = {
    onChange: (on: boolean) => void
}


export const UnControlledOnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const onClickHandler = (value: 'on' | 'off') => {
        if (value === 'on') {
            setOn(true)
            props.onChange(true)
        } else {
            setOn(false)
            props.onChange(false)
        }
    }

    const onStyle = {
        width: '25px',
        height: '17px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '25px',
        height: '17px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        background: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '15px',
        height: '15px',
        borderRadius: '10px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: on ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={() => onClickHandler('on')}>On
            </div>
            <div style={offStyle} onClick={() => onClickHandler('off')}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}