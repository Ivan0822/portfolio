import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import './index.css'

const theme = extendTheme({
  colors: {
    brand: {
      100: "#f5f5f5",
      200: "#c5c6c7",
      500: "#66fcf1",
      900: "#1f2833",
    },
  },
  styles: {
    global: {
      body: {
        bg: 'brand.900',
        scrollBehavior: "smooth"
      }
    }
  },
  fonts: {
    heading: "Fira Sans",
    body: "Fira Sans"
  }
})

// #0b0c10
// #1f2833
// #c5c6c7
// #66fcf1
// #45a29e

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
