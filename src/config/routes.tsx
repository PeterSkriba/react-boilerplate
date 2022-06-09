import React from 'react'

// Layouts
import { Main } from 'layouts'

// Pages
import { Home } from 'pages'

export default [
  {
    path: '/',
    element: <Main />,
    children: [{ path: '/', element: <Home /> }],
  },
]
