import { getPosts, getTodos, getUsers } from "../asyncActions/count"

export const countSyncReducer = {
    increment(state, action) {
        state.count += 1
    },
    decrement(state, action) {
        state.count -= 1
    },
    removePosts(state, action) {
        state.posts = []
    },
    removeUsers(state, action) {
        state.users = []
    },
    removeTodos(state, action) {
        state.todos = []
    }
}

export const countAsyncReducer = (builder) => {
    builder
        .addCase(getPosts.rejected, (state, action) => {
            state.posts = []
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.posts = action.payload
        })
        .addCase(getTodos.rejected, (state, action) => {
            state.todos = []
        })
        .addCase(getTodos.fulfilled, (state, action) => {
            state.todos = action.payload
        })
        .addCase(getUsers.rejected, (state, action) => {
            state.users = []
        })
        .addCase(getUsers.fulfilled, (state, action) => {
            state.users = action.payload
        })
}