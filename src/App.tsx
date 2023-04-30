import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import Root from "./pages/root";
import UserRoot from "./pages/user/user-root";
import UserPosts from "./pages/user/user-posts";
import UserPitches from "./pages/user/user-pitches";
import UserSaved from "./pages/user/user-saved";
import UserAbout from "./pages/user/user-about";

const router = createBrowserRouter([
  {
      path: "/",
      element:<Root/>,
      children: [
          { index: true, element: <Home /> },
          { path:"home", element: <Home/> },
          {
              path: "auth",
              children: [
                  { path: "signup", element: <Signup /> },
                  { path: "login", element: <Login /> },
              ],
          },
          { path:":username", element:<UserRoot/>,children:[
            { index:true, element:<UserPosts/>},
            { path:"posts", element:<UserPosts/>},
            { path:"pitches", element:<UserPitches/>},
            { path:"saved", element:<UserSaved/>},
            { path:"about", element:<UserAbout/>},
          ]},
      ],
  },
]);
function App() {
    return <RouterProvider router={router}/>;
}

export default App;
