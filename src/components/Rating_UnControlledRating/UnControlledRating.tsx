import React, {useState} from "react";

export type RatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5
}

export function UnControlledRating(props: RatingPropsType) {

    let [value, setValue] = useState(0)

    const takeStar = () => {
        setValue(4)
    }

    return (
        <div>
            {/*<Star selected={value > 5} takeStar={takeStar}/>*/}
            <Star selected={value > 0} takeStar={()=>setValue(1)}/>
            <Star selected={value > 1} takeStar={()=>setValue(2)}/>
            <Star selected={value > 2} takeStar={()=>setValue(3)}/>
            <Star selected={value > 3} takeStar={()=>setValue(4)}/>
            <Star selected={value > 4} takeStar={()=>setValue(5)}/>
            {/*<button onClick={()=>setValue(5)}>5</button>*/}
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