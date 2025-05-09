import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Phones from './Components/Phones.jsx';
import Main from './Components/Main.jsx';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Phone from './Components/Phone.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/phones",
        element: <Phones></Phones>,
        loader:()=>fetch('http://localhost:5000/phone')
      },
      {
        path:'/phone/:id',
        element: <Phone></Phone>,
        loader:({params})=>fetch(`http://localhost:5000/phone/${params.id}`)
      }
    ],
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
