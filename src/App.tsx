import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Login from '@pages/site/Login';
import Register from '@pages/site/Register';
import ErrorPage from '@pages/ErrorPage';
import Home from '@pages/site/Home';
import CreateFarm from '@/pages/site/CreateFarm';
import Dashboard from '@/pages/portal/Dashboard';
import Flocks from './pages/portal/flocks/All';

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
          element={<Dashboard />}
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
