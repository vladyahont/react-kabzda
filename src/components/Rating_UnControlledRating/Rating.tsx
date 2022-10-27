import React from "react";

export  type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

export type RatingPropsType = {
     value: RatingValueType
    onClick: (value: RatingValueType) => void
}



export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} takeStar={()=>props.onClick(1)}/>
            <Star selected={props.value > 1} takeStar={()=>props.onClick(2)}/>
            <Star selected={props.value > 2} takeStar={()=>props.onClick(3)}/>
            <Star selected={props.value > 3} takeStar={()=>props.onClick(4)}/>
            <Star selected={props.value > 4} takeStar={()=>props.onClick(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    takeStar: () => void
}

export const Star = (props: StarPropsType) => {
    return (
        <span onClick={props.takeStar}>
           { props.selected ? <b>★</b> : 's' }
        </span>
        )
}