import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { setPostInFlight, setTodoInFlight, setUserInFlight } from "../slices/inFlightsSlice"

export const getPosts = createAsyncThunk(
    "getPosts", async (data: string, { dispatch, getState }) => {
        try {
            dispatch(setPostInFlight('PENDING'))
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
            dispatch(setPostInFlight('SUCCESS'))
            // For dispatching another action and waiting for it to complete
            // await dispatch(getTodos())
            // console.log('state : ', getState())
            return response.data
        } catch (e) {
            dispatch(setPostInFlight('ERROR'))
        }
    })

export const getTodos = createAsyncThunk(
    "getTodos", async (data, { dispatch }) => {
        try {
            dispatch(setTodoInFlight('PENDING'))
            const response = await axios.get(`https://jsonplaceholder.typicode.com/todos`)
            dispatch(setTodoInFlight('SUCCESS'))
            return response.data
        } catch (e) {
            dispatch(setTodoInFlight('ERROR'))
        }
    }
)

export const getUsers = createAsyncThunk("getUsers", async (data, { dispatch }) => {
    try {
        dispatch(setUserInFlight('PENDING'))
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`)
        dispatch(setUserInFlight('SUCCESS'))
        return response.data
    } catch (e) {
        dispatch(setUserInFlight('ERROR'))
    }
})