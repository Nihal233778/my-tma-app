import React from 'react'
import ReactDOM from 'react-dom/client'
import { TadsWidgetProvider } from 'react-tads-widget'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <TadsWidgetProvider>
      <App />
    </TadsWidgetProvider>
  </React.StrictMode>,
)