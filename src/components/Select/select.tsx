import React from "react";
import {Button} from "@mui/material";

type ItemType = {
    title: string
    value: any
}

export type SelectType = {
    value: any
    onClick: (value: any) => void
    items: ItemType[]
}



export function Select(props: SelectType) {
    return (
        <div>
            <Button variant={'outlined'}>+</Button>
        </div>
    )
}