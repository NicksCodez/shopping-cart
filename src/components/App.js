import React from 'react';
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';

// layouts
import RootLayout from '../Layouts/RootLayout/RootLayout';

// pages
import NotFound from './Pages/NotFound/NotFound';
import Home from './Pages/Home/Home';
import Shop, { shopLoader } from './Pages/Shop/Shop';
import Cart from './Pages/Cart/Cart';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} errorElement={<NotFound />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<Shop />} loader={shopLoader} />
      <Route path="cart" element={<Cart />} />

      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
