import { createBrowserRouter } from "react-router-dom";
import Login from "../components/page/authncition/Login";
import Signup from "../components/page/authncition/Signup";
import Blog from "../components/page/Blog/Blog";
import Corce from "../components/page/Corce/Corce";
import Home from "../components/page/Home/Home";
import Profile from "../components/page/Progile/Profile";
import Main from "../Layout/Main";

 export const router = createBrowserRouter([
    {path: '/' , element:<Main></Main>, children:[
        {path:'/' , element: <Home></Home>},
        {path:'/home' , element: <Home></Home>},
        {path:'/corce' , element: <Corce></Corce>},
        {path:'/profile' , element: <Profile></Profile>},
        {path:'/blog' , element: <Blog></Blog>},
        {path:'/login' , element: <Login></Login>},
        {path:'/signup' , element: <Signup></Signup>},
    ]}
])