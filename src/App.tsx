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
