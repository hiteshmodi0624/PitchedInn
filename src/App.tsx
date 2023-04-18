import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home";
import Signup from "./pages/auth/signup";
import Login from "./pages/auth/login";
import Root from "./pages/root";
import Search from "./pages/user/search";
import Explore from "./pages/user/explore";
import Pitches from "./pages/user/pithces";
import Messages from "./pages/user/messages";
import Notifications from "./pages/user/notifications";
import UserProfile from "./pages/user/user-profile";
import Create from "./pages/user/create";
import More from "./pages/user/more";

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
          { path:"search", element:<Search/>},
          { path:"explore", element:<Explore/>},
          { path:"pitches", element:<Pitches/>},
          { path:"messages", element:<Messages/>},
          { path:"notifications", element:<Notifications/>},
          { path:"create", element:<Create/>},
          { path:":userId", element:<UserProfile/>},
          { path:"more", element:<More/>},
      ],
  },
]);
function App() {
    return <RouterProvider router={router}/>;
}

export default App;
