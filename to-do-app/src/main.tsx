import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import ErrorPage from './pages/ErrorPage.tsx'
import TodoPage from './pages/TodoPage.tsx'

const router=createBrowserRouter([
  {
    path:"/",
    element: <App />,
    errorElement:<ErrorPage/>,

  },
  {
    path:"/todo/:todotitle/:todoid",
    element:<TodoPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
