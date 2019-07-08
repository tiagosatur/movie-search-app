import { createGlobalStyle } from "styled-components"
import colorPallete from '../variables/colorPallete'


export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    *, *:after, *:before {
        box-sizing: border-box;
    }

    body {
        /* background-image: linear-gradient(110deg, #f93d66, #6d47d9); */
        background-repeat: no-repeat;
        margin: 0;
        padding: 0;
    }
    html, body {
        font-family: 'Roboto';
        height: 100%;
    }
    #root {
        height: 100%;
    
        & > div {
            height: 100%;

        }
    }

    a {
        color: ${colorPallete.primary};
        text-decoration: none;
    }
`