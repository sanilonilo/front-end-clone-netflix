import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import '@fortawesome/fontawesome-free/css/all.css'

import {Provider} from 'react-redux'
import Store from './store/Store'

import Routes from './routes/Routes'

const store = Store()

const Redux = () => {
    return(
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}

ReactDOM.render(<Redux />,document.getElementById('root'))
