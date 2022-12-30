import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import "./style.scss";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate
} from "react-router-dom";
import LeftBar from "./components/LeftBar/LeftBar";
import RightBar from "./components/rightbar/RightBar";
import Navbar from "./components/navbar/Navbar";
import {useContext} from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { TweetContext } from "./context/tweetContext";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Thread from "./components/thread/Thread";

function App() {

  const {currentUser} = useContext(AuthContext);
  const {darkMode} = useContext(DarkModeContext);
  const {setTweeter} = useContext(TweetContext);

  const queryClient = new QueryClient()
  console.log(currentUser);

  const Layout = ()=>{
    return(
      <QueryClientProvider client={queryClient}>
      
        <div className={`theme-${darkMode ? "dark" : "light" }`}>
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
        </div>
      </QueryClientProvider>
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
        }, 
        {
          path:":id/comments/:tid",
          element: <Thread/>
        },
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
