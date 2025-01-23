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
import AllClasses from "../Pages/AllClasses/AllClasses";
import AddForum from "../Pages/Dashboard/AdminPage/AddForum";
import TrainerBooked from "../Shared/TrainerBookedPage/TrainerBooked";
import AllNewsletter from "../Pages/Dashboard/AdminPage/AllNewsletter";
import Community from "../Pages/Community";
import AppliedTrainer from "../Pages/Dashboard/AdminPage/AppliedTrainer";
import AppliedTrainerDetails from "../Pages/Dashboard/AdminPage/AppliedTrainerDetails";
import AdminRoute from "./AdminRoute";


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
          element: <PrivateRoute>
            <TrainerDetails></TrainerDetails>
          </PrivateRoute>,
          
        },
        {
          path: 'allClasses',
          element: <AllClasses></AllClasses>
        },
        {
          path: 'trainerBooked',
          element: <TrainerBooked></TrainerBooked>
        },
        {
          path: "community",
          element: <Community></Community>
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
        // admin routes 
        {
          index: true,
          path: 'allNewsletter',
          element: <PrivateRoute>
            <AdminRoute>
            <AllNewsletter></AllNewsletter> 
            </AdminRoute>
          </PrivateRoute>
        },
        {
          path: 'adTrainers',
          element: <PrivateRoute>
            <AdminRoute>
            <AllTrainersAm></AllTrainersAm>
            </AdminRoute>
          </PrivateRoute>
        },
        {
          path: 'appliey',
          element: <PrivateRoute>
          <AdminRoute>
          <AppliedTrainer></AppliedTrainer>
          </AdminRoute>
        </PrivateRoute>  
        },
        {
          path:'/dashboard/trainer/:id',
          element:  <PrivateRoute>
          <AdminRoute>
          <AppliedTrainerDetails></AppliedTrainerDetails>
          </AdminRoute>
        </PrivateRoute> 
        },
        {
          path: 'addClass',
          element:  <PrivateRoute>
          <AdminRoute>
          <AddClass></AddClass>
          </AdminRoute>
        </PrivateRoute> 
        },
        {
          path: 'addForum',
          element: <AddForum></AddForum>
        },
        // trainer Route
      ]
    },

  ]);
  
  export default router;