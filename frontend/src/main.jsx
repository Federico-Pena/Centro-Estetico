import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from './Context/User/userContext'
const root = ReactDOM.createRoot(document.getElementById('root'))
const clientIdAuth0 = import.meta.env.VITE_AUTH0_CLIENT_ID
const domainAuth0 = import.meta.env.VITE_AUTH0_DOMAIN
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={domainAuth0}
      clientId={clientIdAuth0}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE_API
      }}>
      <UserProvider>
        <App />
      </UserProvider>
    </Auth0Provider>
  </React.StrictMode>
)
