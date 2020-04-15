import { createStore } from 'redux'
import BlogReducer from './reducer'


const getStore = () => {
    return createStore(BlogReducer)
}

export getStore()