import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={
        {'display': 'flex',
        'align-items': 'center',
        'justifyContent': "center",
        'flexDirection': "column",
        'width': '-webkit-fill-available',
        'textAlign': 'center'
      }
    }>
    <App />
    </div>
  </React.StrictMode>,
)
