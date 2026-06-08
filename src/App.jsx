import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
 import Shop from './pages/Shop'
 import About from './pages/About'
 import Contact from './pages/Contact'
 import Blog from './pages/Blog'
 import Carts from './pages/Carts'
 import SignIn from './pages/SignIn'
 import Register from './pages/Register'
import FAQ from './pages/FAQ'
import Terms from './pages/Terms'
import Refund from './pages/Refund'
import Privacy from './pages/Privacy'
const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'shop', element: <Shop /> },
       { path: 'about', element: <About /> },
       { path: 'contact', element: <Contact /> },
       { path: 'blog', element: <Blog /> },
       { path: 'cart', element: <Carts /> },
       { path: 'signin', element: <SignIn /> },
       { path: 'register', element: <Register /> },
       { path: 'faq', element: <FAQ /> },
       { path: 'terms', element: <Terms /> },
       { path: 'refund', element: <Refund /> },
       { path: 'privacy', element: <Privacy/> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}