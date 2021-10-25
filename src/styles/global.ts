import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }

  :root {
    --font-family: 'Roboto', sans-serif;;
    --font-size: 1.6rem;
    --color-main: #B1040E;
    --color-com: #FF9234;
    --color-light: #eee;
    --color-dark: #111;
    --box-shadow: 0 0 1rem rgba(255, 146, 52, 0.4);
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;scrollbar-width: thin;
    scrollbar-color: var(--color-main) rgba(0, 0, 0, 0);
  }

  ::-webkit-scrollbar {
    overflow: overlay;
    width: 0.8rem;
    height: 0.8rem;
  }

  ::-webkit-scrollbar-track {
    display: initial;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(var(--color-light), var(--color-main));
    border-radius: 0.2rem;
  }

  body {
    font-size: var(--font-size);
    font-family: var(--font-family);
    color: var(--color-dark);
    background-color: #eee;
    min-width: 375px;
    font-weight: 300;
  }

  h1, h2, h3 {
    font-weight: 700;
    color: var(--color-main);
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

  input, select, textarea, button {
    outline: none;
    font-family: var(--font-family);
    font-weight: 300;
    color: var(--color-dark);
  }

  button {
    cursor: pointer;
    text-transform: uppercase;
    border: none;
  }

  #root {
    height: 100vh;
    width: 100%;
    opacity: 1;
    background-image: radial-gradient(var(--color-light) 1.40px, #420516 1.40px);
    background-size: 27px 27px;
    display: grid;
    place-items: center;
  }

  main {
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 40rem;
    background: var(--color-light);
    overflow: hidden;
    @media screen and (min-width: 400px) {
      border-radius: .3rem;
    }
    @media screen and (min-width: 500px) {
      height: 95%;
    }
  }
  .content-info {
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding: 3rem;
  }
  .button-link {
    width: 100%;
    font-weight: 500;
    height: 4rem;
    display: grid;
    place-items: center;
    background: var(--color-main);
    color: var(--color-light);
  }
`
