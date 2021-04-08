import React, { Component } from 'react'
import Blog from './blog.js'


export class Home extends Component {

    async componentDidMount() {
        console.log("i'm over here: ")
    }

    render() {

        return (
            <div>
                <Blog />
            </div>
        )
    }
}

export default Home