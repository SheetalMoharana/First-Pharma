import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
// import Shop from './pages/Shop'
// import About from './pages/About'
// import Contact from './pages/Contact'
// import Blog from './pages/Blog'
// import Cart from './pages/Cart'
// import SignIn from './pages/SignIn'
// import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      // { path: 'shop', element: <Shop /> },
      // { path: 'about', element: <About /> },
      // { path: 'contact', element: <Contact /> },
      // { path: 'blog', element: <Blog /> },
      // { path: 'cart', element: <Cart /> },
      // { path: 'signin', element: <SignIn /> },
      // { path: 'register', element: <Register /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}