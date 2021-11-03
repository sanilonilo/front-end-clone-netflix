import {compose,applyMiddleware,createStore,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers/Auth'

import reducerAuth from './reducers/Auth'

const reducers = combineReducers({
    user:reducerAuth
})

const Store = () => {
    return createStore(reducers,compose(applyMiddleware(thunk)))
}

export default Store