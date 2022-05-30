import React from 'react'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import TestState from './components/TestState'

function App() {
    return (
        <>
            <Route path="/" component={Main} exact={true} />
            <Route path="/test/state" component={TestState} exact={true} />
        </>
    )
}

export default App
