import {createStore} from 'redux'
import reducer from './reducer.js'
import { addCommodity } from "./actions.js"

const store = createStore(reducer)

console.log(store.getState())
store.dispatch(addCommodity)
store.getState()