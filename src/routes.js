import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './components/home.js'
import { Bootcamp } from './components/bootcamp.js'
import { ContactUs } from './components/contactUs.js'


/**
 * COMPONENT
 */
class Routes extends Component {
    render() {

        return (
            <Switch>
                <Route path="/bootcamp" component={Bootcamp} />
                <Route path="/contact" component={ContactUs} />
                <Route component={Home} />
            </Switch>
        )
    }
}

export default Routes