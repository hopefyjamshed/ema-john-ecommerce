import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/main/Main';
import Order from './Components/order/Order';
import Reviwe from './Components/review/Reviwe';
import Inventory from './Components/inventory/Inventory';
import Login from './Components/login/Login';
import Card from './Components/Product/Card';
import Shop from './Components/Shop/Shop';
import { ProductAndCartDataLoader } from './Components/loaders/ProductsAndCartDataLoader';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [

        {
          path: '/',
          loader: () => fetch('products.json'),
          element: <Shop></Shop>
        },
        {
          path: '/order',
          loader: ProductAndCartDataLoader,
          element: <Order></Order>
        },
        {
          path: '/order-reviwe',
          element: <Reviwe></Reviwe>
        },
        {
          path: '/manageInventory',
          element: <Inventory></Inventory>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
