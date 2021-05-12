import { NextPageContext } from "next"
import { Store } from "redux"

type ApplicationState = any


export interface NextPageContextWithStore extends NextPageContext {
    store: Store<ApplicationState, any>
}