import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router } from 'react-router-dom'
import './index.css'
import App from './App'

const routerBaseName = '/charcadoinc'

ReactDOM.render(
  <Router basename={routerBaseName}>
    <App />
  </Router>,
  document.getElementById('root')
)