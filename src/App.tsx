import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import "react-datepicker/dist/react-datepicker.css";
import { Chart as ChartJS, Colors
  } from 'chart.js/auto';
import Login from '@pages/site/Login';
import Register from '@pages/site/Register';
import ErrorPage from '@pages/ErrorPage';
import Home from '@pages/site/Home';
import CreateFarm from '@/pages/site/CreateFarm';
import Dashboard from '@/pages/portal/Dashboard';
import Flocks from './pages/portal/flocks/All';
import FlockOverview from './pages/portal/flocks/FlockOverview';
import Growth from './pages/portal/flocks/Growth';
import Mortalities from './pages/portal/flocks/Mortalities';

/**
 * Register chart js
 * This allow to use chart js components in all the components
 * */
ChartJS.register(Colors);

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route
        path="/"
        errorElement={<ErrorPage />}
      >
        <Route
          path=''
          element={<Home />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
           path="/register"
           element={<Register />}
        />
        <Route
           path="/create-farm"
           element={<CreateFarm />}
        />
        <Route
          path='farm/:farmslug'
          element={<Dashboard />}
        />
        <Route
          path='farm/:farmslug/settings'
          element={<Dashboard />}
        />
        <Route
          path='farm/:farmslug/settings/members'
          element={<Dashboard />}
        />
        <Route
          path='farm/:farmslug/flocks'
          element={<Flocks />}
        />
        <Route
          path='farm/:farmslug/flocks/:flockslug'
          element={<FlockOverview />}
        />
        <Route
          path='farm/:farmslug/flocks/:flockslug/growth'
          element={<Growth />}
        />
        <Route
          path='farm/:farmslug/flocks/:flockslug/mortalities'
          element={<Mortalities />}
        />
        <Route
          path='farm/:farmslug/flocks/:flockslug/settings'
          element={<Flocks />}
        />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
