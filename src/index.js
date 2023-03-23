import React from 'react'
import  ReactDOM  from 'react-dom/client'
import App from './App';
import './index.css'


const Index = () => {
  return (
    <>
        <App />
    </>
  )
}

const root = document.getElementById("root")

const rootDom = ReactDOM.createRoot(root)

rootDom.render(<Index />)