import { createBrowserRouter } from 'react-router-dom'

export const makeRouter = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <div>Home</div>,
    },
  ])
}

export const appRouter = makeRouter()
