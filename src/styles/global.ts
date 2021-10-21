import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
  --background: #ffffff;
  --text: #1d1d1b;
  --primary: #C3002F;
  --secondary: #2D9CDB;
  --light-grey: #eeeeee;
  --dark-grey:#6c6c6c;
}

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body, #root {
    background-color: var(--background);
    font-size: 16px;
    color: var(--text);
    height: 100%;
  }

  body, input, button, p {
    font-family: Poppins, sans-serif;
    font-size: 1.125rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input {
    font-weight: 400;
  }

  button {
    cursor: pointer;
    font-weight: 500;
  }

  h2 {
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  small {
    color: var(--dark-grey) !important;
  }
`;
