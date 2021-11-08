import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'

import App from './App'

// import 'styles/fonts.css'
import 'styles/global.css'

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
)
