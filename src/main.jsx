import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from './App.jsx';
import RandomUser from "./pages/User/RandomUser.jsx";
import RandomJokes from "./pages/Jokes/RandomJokes.jsx";
import CatsListings from "./pages/Cats/CatsListings.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path='' element={<RandomUser />} />
      <Route path='/random-user' element={<RandomUser />} />
      <Route path='/random-jokes' element={<RandomJokes />} />
      <Route path='/cats-listings' element={<CatsListings />} />
  </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
