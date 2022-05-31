import React from 'react'
import { Route } from 'react-router-dom'
import Main from './components/Main'
import TestState from './components/TestState'
import Basic from './templates/Default'
import './App.css'

function App() {
    return (
        <>
            <Route path="/" component={Basic} exact={true} />
            <Route path="/test/state" component={TestState} exact={true} />
        </>
    )
}

export default App
