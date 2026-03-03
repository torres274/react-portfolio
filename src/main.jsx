import React from 'react'
import ReactDOM from 'react-dom'

import './global.scss'
import App from './components/App'

const container = document.getElementById('root')

// Avoid JSX here so Vite's HTML build step can always parse this file
ReactDOM.render(React.createElement(App), container)

