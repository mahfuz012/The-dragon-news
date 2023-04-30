import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layoutFile/Main";
import Home from "../pagesFile/Home/Home";
import Categories from "../Categories";
import NewsLayout from "../layoutfile/NewsLayout";
import NewsDetails from "../layoutfile/NewsDetails";

import User from "../layoutfile/User";
import Register from "../pagesFile/Register";
import Logins from "../pagesFile/Home/Logins";

import Bookmark from "../pagesFile/Home/Bookmark";
import PrivateRoute from "./PrivateRoute";








const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children:[
        {
            path:"/",
            element:<Navigate to={"/categories/0"}></Navigate>
          
        },
        {
            path:"/categories/:idno",
            element:<Categories />,
            loader : ()=> fetch("http://localhost:5000/news")
        }
      ]


    },

    {
      path:"/newsdetails",
      element:<NewsLayout />,
      
      children:[{
        path:"/newsdetails/:idno",
        element:<NewsDetails />,
        loader : ()=> fetch("http://localhost:5000/news")
      }]
    },

    {
      path:"/user",
      element:<User />,
         children:[
               {
               path:"/user/login",
               element:<Logins />
               },
               {
               path:'/user/register',
               element:<Register />
               },
               {
               path:'/user/bookmark',
               element:<PrivateRoute> <Bookmark /></PrivateRoute>
               }

    ]}






    
  ]);



export default router;  