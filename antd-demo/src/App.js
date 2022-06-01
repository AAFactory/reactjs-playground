import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import TestState from './pages/TestState'
import MainLayout from './components/Layout/MainLayout'
import ButtonSample from './pages/ButtonSample'

function App() {
    return (
        <MainLayout>
            <Route path="/" component={ButtonSample} exact={true} />
            <Route path="/test/state" component={TestState} exact={true} />
            <Route path="/:feature" component={ButtonSample} exact={true} />
        </MainLayout>
    )
}

export default App
