import React from "react";
import {reducer, StateType} from "./reducer";


test('reducer should change value to opposite value', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(true)
})

test('reducer should change value into opposite value', () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: 'TOGGLE-COLLAPSED'})

    expect(newState.collapsed).toBe(false)
})