import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    outline: 0;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${({ theme }) => theme.colors.light};

    font-size: 15px;
    line-height: 20px;
    font-weight: 300;
    color: ${({ theme }) => theme.colors.dark};
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: inherit;
    font-style: inherit;
    font-size: inherit;
    line-height: inherit;
  }

  img {
    display: block;
  }

  iframe {
    border: 0;
    display: block;
  }

  a {
    text-decoration: none;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    color: inherit;
    border: 0;
  }

  input, button, textarea, select {
    font-family: sans-serif;
  }
`
