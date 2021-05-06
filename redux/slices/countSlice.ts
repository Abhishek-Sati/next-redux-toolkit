import { createSlice } from '@reduxjs/toolkit'
import { countAsyncReducer, countSyncReducer } from "../reducers/countReducer"

type CountType = {
    count: number
    posts: Array<any>
    users: Array<any>
    todos: Array<any>
}

let initialState: CountType = {
    count: 0,
    posts: [],
    users: [],
    todos: [],
}

const { actions, reducer } = createSlice({
    name: 'counter',
    initialState,
    reducers: countSyncReducer,
    extraReducers: (builder) => countAsyncReducer(builder)
})

export const { increment, decrement, removePosts, removeUsers, removeTodos } = actions

export default reducer