import React from 'react'
import { createRoot } from 'react-dom/client'

import './global.scss'
import App from './components/App'

const container = document.getElementById('root')
createRoot(container).render(<App />)
