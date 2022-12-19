import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Route, 
  Outlet,
  Navigate
} from "react-router-dom";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import Navbar from "./components/navbar/Navbar";
import { element } from "prop-types";

function App() {

  const currentUser = true;

  const Layout = ()=>{
    return(
        <div style={{ display: "flex"}}>
          <LeftBar/>
          <div style={{ flex: 5}}>
            <div style={{ display: "block"}}>
              <Navbar />
              <Outlet />
            </div>
          </div>
          <RightBar />
        </div>
    )
  }

  const ProtectedRoute = ({children}) => {
    if(!currentUser){
      return <Navigate to="/login"/>
    }

    return children
  }

  const router = createBrowserRouter([
    {
      path:"/",
      element: (
        <ProtectedRoute>
          <Layout/>
        </ProtectedRoute>
      ),
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/profile/:id",
          element:<Profile />
        } 
      ]   

    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
  ]);

  return (
    <div>
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
