import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/home.js'
import { Tutoring } from './components/tutoring.js'

/**
 * COMPONENT
 */
class Routes extends Component {
    render() {

        return (
            <Switch>
                <Route path="/tutoring" component={Tutoring} />
                <Route component={Home} />
            </Switch>
        )
    }
}

export default Routes