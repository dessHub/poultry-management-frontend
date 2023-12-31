import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Login from './pages/site/Login';
import Register from './pages/site/Register';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/site/Home';
import CreateFarm from './pages/site/farm/create';

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
