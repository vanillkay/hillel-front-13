import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import { Home } from "../pages/Home";
import{PageNotFound} from '../pages/PageNotFound'
import {Films} from '../pages/Films'
import{Film} from '../pages/Film'

const router = createBrowserRouter([
    {
      path: "/",
      element:  <Home />,
    },

    {
      path: '/films',
      element: <Films/>
    },

    {
      path: '/films/:filmId/',
      element: <Film/>
    },
  
    {
      path: '*',
      element: <PageNotFound/>
    }
  ]);

export const Router = () => <RouterProvider router={router}/>