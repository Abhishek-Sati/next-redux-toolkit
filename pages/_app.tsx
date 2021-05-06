import NextApp, { AppContext } from "next/app"
import { Provider } from 'react-redux'
import { Store } from "redux"
import withReduxStore from '../redux/utils/withReduxStore'

type AppProps = {
    reduxStore: Store
}

class App extends NextApp<AppProps> {
    public props: any

    static async getInitialProps(props: AppContext): Promise<{ pageProps: {} }> {
        const { Component, ctx } = props
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {
            pageProps
        }
    }

    render() {
        const { Component, pageProps, reduxStore } = this.props
        return (
            <Provider store={reduxStore}>
                <Component {...pageProps} />
            </Provider>
        )
    }
}

export default withReduxStore(App)