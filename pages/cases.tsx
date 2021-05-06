import { useRouter } from "next/router"
import { connect } from 'react-redux'
import { increment, decrement } from '../redux/slices/countSlice'
import { NextPageContextWithStore } from "../../5c-admin-frontend/redux-saga/utils"
import { getUsers } from "../redux/asyncActions/count"

const Cases = (props) => {
    const { counted, increment, decrement, users } = props
    const router = useRouter()
    return (<>
        <h1>This is Cases page</h1>
        <h3>Count: {counted}</h3>
        <h3>Users : {JSON.stringify(users.length)}</h3>
        <hr/>
        <button onClick={() => increment()}>Increment By One</button>
        <button style={{ margin: '0 1rem' }} onClick={() => decrement()}>Decrement By One</button>
        <button onClick={() => router.push('/')}>Go Back to home page</button>
    </>)
}

const mapStateToProps = (state) => ({
    counted: state.count.count,
    users: state.count.users
})

const mapDispatchToProps = { increment, decrement, getUsers }

Cases.getInitialProps = async function (ctx: NextPageContextWithStore) {
    const { store } = ctx
    await store.dispatch(getUsers())
    return {}
}


export default connect(mapStateToProps, mapDispatchToProps)(Cases)