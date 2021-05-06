import { createSlice } from '@reduxjs/toolkit'
import { inFlightsSyncReducer } from "../reducers/inFlightsReducer"

export type InFlightStatusType = 'SUCCESS' | 'ERROR' | 'PENDING' | 'INITIAL'

type CountType = {
    postInFlights: InFlightStatusType,
    userInFlights: InFlightStatusType,
    todoInFlights: InFlightStatusType
}

let initialState: CountType = {
    postInFlights: 'INITIAL',
    userInFlights: 'INITIAL',
    todoInFlights: 'INITIAL'
}

const { actions, reducer } = createSlice({
    name: 'inFlights',
    initialState,
    reducers: inFlightsSyncReducer
})

export const { setPostInFlight, setTodoInFlight, setUserInFlight } = actions

export default reducer