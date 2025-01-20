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
import BeTrainer from "../Pages/Be_A_Trainer/BeTrainer";
import AllTrainersAm from "../Pages/Dashboard/AdminPage/AllTrainersAm";
import AddClass from "../Pages/Dashboard/AdminPage/AddClass";


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
          element: <TrainerDetails></TrainerDetails>,
          
        },
        {
          path: 'beTrainer',
          element: <BeTrainer></BeTrainer>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'register',
          element: <Register></Register>
        },       
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>,
      children: [
        {
          path: 'adTrainers',
          element: <AllTrainersAm></AllTrainersAm>
        },
        {
          path: 'addClass',
          element: <AddClass></AddClass>
        },
      ]
    },

  ]);
  
  export default router;