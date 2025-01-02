import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import Router from './router'
import './main.css'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
)
