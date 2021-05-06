import { connect } from 'react-redux'
import { increment, decrement, removePosts, removeTodos, removeUsers } from '../redux/slices/countSlice'
import Link from "next/link"
import { getUsers, getPosts, getTodos } from "../redux/asyncActions/count"
import { NextPageContextWithStore } from "../../5c-admin-frontend/redux-saga/utils"


const IndexPage = (props) => {
    const {
        counted,
        increment,
        decrement,
        posts,
        getUsers,
        removePosts,
        inFlights,
        getPosts,
        getTodos,
        users,
        todos,
        removeUsers,
        removeTodos
    } = props
    return (
        <div>
            <Link href={'/cases'}>Go To Cases</Link>
            <h3>Count: {counted}</h3>
            {inFlights.postInFlights === 'PENDING' || inFlights.todoInFlights === 'PENDING' || inFlights.userInFlights === 'PENDING' ?
                <div>Loading...</div> : null}
            <h3>Posts: {JSON.stringify(posts.length)}</h3>
            <h3>Users: {JSON.stringify(users.length)}</h3>
            <h3>Todos: {JSON.stringify(todos.length)}</h3>
            <hr/>
            <button onClick={() => increment()}>Increment By One</button>
            &nbsp;
            <button onClick={() => decrement()}>Decrement By One</button>
            &nbsp;
            <button onClick={() => getUsers()}>Get Users</button>
            &nbsp;
            <button onClick={() => getPosts()}>Get Posts</button>
            &nbsp;
            <button onClick={() => getTodos()}>Get Todos</button>
            &nbsp;
            <button onClick={() => removePosts()}>Remove Posts</button>
            &nbsp;
            <button onClick={() => removeUsers()}>Remove Users</button>
            &nbsp;
            <button onClick={() => removeTodos()}>Remove Todos</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    counted: state.count.count,
    posts: state.count.posts,
    users: state.count.users,
    todos: state.count.todos,
    inFlights: state.inFlights
})

const mapDispatchToProps = {
    increment,
    decrement,
    getUsers,
    removePosts,
    getPosts,
    getTodos,
    removeTodos,
    removeUsers
}
IndexPage.getInitialProps = async function (ctx: NextPageContextWithStore) {
    const { store } = ctx
    await store.dispatch(getUsers())
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)