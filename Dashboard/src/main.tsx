import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { store } from './redux/store.ts'
import { Provider } from 'react-redux'
import { UserProvider } from './context/UserContext.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <UserProvider>
      <Provider store={store}>
        <BrowserRouter>
         <App />
        </BrowserRouter>
    </Provider>
    </UserProvider>
   
  </StrictMode>,
)
