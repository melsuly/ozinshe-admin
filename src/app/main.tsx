import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider as ReduxProvider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { appStore } from './store'
import { appRouter } from './router'
import '@/shared/styles'

const root = document.getElementById('app') as HTMLElement

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <ReduxProvider store={appStore}>
      <RouterProvider router={appRouter} />
    </ReduxProvider>
  </React.StrictMode>
)
