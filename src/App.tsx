import './App.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import Login from './pages/site/Login';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/site/Home';

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
