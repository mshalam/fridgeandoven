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
                <div align="center">
                    <div id="textInfo">
                        <h2>Price : $</h2>
                        <h2>Inflation Rate: %</h2>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home