import React from 'react'
import { RouteObject } from 'react-router'

// Layouts
import { Main } from 'layouts'

// Pages
import { Home } from 'pages'

export default [
  {
    path: '',
    element: <Main />,
    children: [{ index: true, element: <Home /> }],
  },
] as RouteObject
