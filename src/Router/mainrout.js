import { createBrowserRouter } from "react-router-dom";
import Login from "../components/page/authncition/Login";
import Signup from "../components/page/authncition/Signup";
import Blog from "../components/page/Blog/Blog";
import Corce from "../components/page/Corce/Corce";
import CorceItes from "../components/page/Corce/CorceItes";
import CorseHome from "../components/page/Corce/CorseHome";
import PayWith from "../components/page/Corce/PayWith";
import Home from "../components/page/Home/Home";
import Profile from "../components/page/Progile/Profile";
import Error from "../components/shared/Error/Error";
import Main from "../Layout/Main";

 export const router = createBrowserRouter([
    {path: '/' , element:<Main></Main>, children:[
        {path:'/' , element: <Home></Home>},
        {path:'/home' , element: <Home></Home>},
        {path:'/course' , element: <Corce></Corce> , loader: async()=>fetch("https://hablu-larner-sarver-rahul-sarker18.vercel.app/items") , children:[

            {path:'/course/details/:id' , element:<CorceItes></CorceItes> , loader: async({params})=>fetch(`https://hablu-larner-sarver-rahul-sarker18.vercel.app/item/${params.id}`)},
            
            {path:'/course/details/:id' , element:<CorceItes></CorceItes> , loader: async({params})=>fetch(`https://hablu-larner-sarver-rahul-sarker18.vercel.app/item/${params.id}`)},

            {path:'/course' , element: <CorseHome></CorseHome> , loader:()=> fetch('https://hablu-larner-sarver-rahul-sarker18.vercel.app/item/10')},
           
        ]} ,
        
        {path:'/pay' , element:<PayWith></PayWith>},
        {path:'/profile' , element: <Profile></Profile>},
        {path:'/blog' , element: <Blog></Blog> },
        {path:'/login' , element: <Login></Login>},
        {path:'/signup' , element: <Signup></Signup>},
    ]},
    
    {path:'*' ,element:<Error></Error>}
])

//  https://hablu-larner-sarver-rahul-sarker18.vercel.app/item/1