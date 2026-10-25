
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import store from './store/store.ts'
import { Provider } from 'react-redux'
import { router } from './router/index.tsx'


createRoot(document.getElementById('root')!).render(


    <Provider store={store}>
  <RouterProvider router={router}/>
    </Provider>


)
