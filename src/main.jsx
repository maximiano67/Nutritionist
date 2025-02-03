import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider} from 'react-router-dom'


//pages
import Home from './Routers/home/Home.jsx'
import About from './Routers/about/About.jsx'
import Team from './Routers/Team/Team.jsx'
import Process from './Routers/Process/Process.jsx'
import Pricing from './Routers/Pricing/Pricing.jsx'
import Blog from './Routers/blog/Blog.jsx'
import Contact from './Routers/Contact/Contact.jsx'

const Router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/team",
        element: <Team />
      },
      {
        path: '/process',
        element: <Process />
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router} />
  </StrictMode>,
)
