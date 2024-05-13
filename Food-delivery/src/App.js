import React,{lazy,Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu"
import Shimmer from "./Components/Shimmer";
// import Grocery from "./Components/Grocery";

//chunking 
//code splitting
//Dynamic Bundeling
//Lazy Loading
//On Demand Loading

//all these are same things optimizing the app as whole js file will be bundled in one file that will increase size and hence decrease overall performance  

const Grocery = lazy(() => import("./Components/Grocery"));

const AppLayout = () => {
    return (
        <div className="app">
            {/* Header */}
            <Header/>
            {/* Body */}
            <Outlet/>
            {/* Footer */}
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/grocery",
                element:
                    <Suspense fallback = {<Shimmer/>}>
                        <Grocery/>
                    </Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>
            }         
        ],
        errorElement:<Error/>,
    },

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>)
