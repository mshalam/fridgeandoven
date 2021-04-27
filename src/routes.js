import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/home.js'
import { Bootcamp } from './components/bootcamp.js'

/**
 * COMPONENT
 */
class Routes extends Component {
    render() {

        return (
            <Switch>
                <Route path="/bootcamp" component={Bootcamp} />
                <Route component={Home} />
            </Switch>
        )
    }
}

export default Routes