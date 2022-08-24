import React from 'react'
import store from './store/index'
import { Provider } from 'react-redux'
import { AppRouter } from './Routers/AppRouter'


export default function App() {
    return (
    <div className='App'>
        <Provider store={store}>
            <AppRouter />
        </Provider>
    </div>
    )
}