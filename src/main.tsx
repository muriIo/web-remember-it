import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import PageDemoOne from './demo/page-demo-one.jsx'
import PageDemoTwo from './demo/page-demo-two.jsx'
import NotFound from './demo/not-found.jsx'
import HomeDemo from './demo/home-demo.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.scss'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "home",
        element: <HomeDemo />,
        children: [
          {
            path: "one",
            element: <PageDemoOne />,
          },
          {
            path: "two",
            element: <PageDemoTwo />,
          },
        ]
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
