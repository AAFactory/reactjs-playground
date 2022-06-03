import './App.css'
import React from 'react'
import { Route } from 'react-router-dom'
import TestState from './pages/TestState'
import MainLayout from './components/Layout/MainLayout'
import ButtonSample from './pages/ButtonSample'
import TypographySample from './pages/Typography'
import GridSample from './pages/GridSample'
import Reference from './pages/Reference'
import FormSample from './pages/FormSample'

function App() {
    return (
        <MainLayout>
            <Route path="/" component={Reference} exact={true} />
            <Route path="/form" component={FormSample} exact={true} />
            <Route path="/button" component={ButtonSample} exact={true} />
            <Route path="/typography" component={TypographySample} exact={true} />
            <Route path="/grid" component={GridSample} exact={true} />            
            <Route path="/test/state" component={TestState} exact={true} />
        </MainLayout>
    )
}

export default App
