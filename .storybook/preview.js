import React from 'react'

import { ThemeProvider } from 'styled-components'

import theme from '../src/styles/theme'
import GlobalStyles from '../src/styles/global'

export const decorators = [
  (Story) => (
    <ThemeProvider {...{ theme }}>
      <main style={{ margin: '3em' }}>
        <Story />
      </main>

      <GlobalStyles />
    </ThemeProvider>
  ),
]

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
