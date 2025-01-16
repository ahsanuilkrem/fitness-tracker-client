import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import Login from "../components/Authlayout/Login";
import Register from "../components/Authlayout/Register";
import Dashboard from "../Pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllTrainer from "../Pages/AllTrainer/AllTrainer";
import TrainerDetails from "../Pages/TrainerDetails/TrainerDetails";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: 'allTrainer',
          element: <AllTrainer></AllTrainer>
        },
        {
          path: '/trainer/:id',
          element: <TrainerDetails></TrainerDetails>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
          path: 'dashboard',
          element: <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        }
     
       
      ]
    },
  ]);
  
  export default router;