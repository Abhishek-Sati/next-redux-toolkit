export const inFlightsSyncReducer = {
    setPostInFlight(state, action) {
        state.postInFlights = action.payload
    },
    setUserInFlight(state, action) {
        state.userInFlights = action.payload
    },
    setTodoInFlight(state, action) {
        state.todoInFlights = action.payload
    }
}