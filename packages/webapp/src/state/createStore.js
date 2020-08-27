import { applyMiddleware, createStore as reduxCreateStore } from "redux"
import logger from 'redux-logger'

const reducer = (state, action) => {
  if (action.type === `HOME_PAGE_LOADED`) {
    return Object.assign({}, state, {isHomeLoaded: true})
  }
  return state
}

const initialState = { count: 0 }

const createStore = () => reduxCreateStore(reducer, initialState, applyMiddleware(logger))
export default createStore