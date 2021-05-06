import { combineReducers } from 'redux'

import count from '../slices/countSlice'
import inFlights from "../slices/inFlightsSlice"

const reducers = combineReducers({
    count,
    inFlights,
})

export default reducers