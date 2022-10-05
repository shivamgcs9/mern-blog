import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
// import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  redirect,
  // Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";
import Settings from "./pages/settings/Settings";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Outlet />
    </>
  );
};

function App() {
  const { user } = useContext(Context);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepage />,
        },
        {
          path: "/posts",
          element: <Homepage />,
        },
        {
          path: "/post/:id",
          element: <Single />,
        },
        {
          path: "/write",
          loader: async () => {
            if (!user) {
              return redirect("/login");
            }
          },
          element: <Write />,
        },
        {
          path: "/settings",
          element: <Settings />,
        },
        {
          path: "/register",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
    // <Router>
    //   <Topbar />
    //   <Switch>
    //     <Route exact path="/">
    //       <Homepage />
    //     </Route>
    //     <Route path="/posts">
    //       <Homepage />
    //     </Route>
    //     <Route path="/register">
    //       {currentUser ? <Homepage /> : <Register />}
    //     </Route>
    //     <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
    //     <Route path="/post/:id">
    //       <Single />
    //     </Route>
    //     <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
    //     <Route path="/settings">{currentUser ? <Settings /> : <Login />}</Route>
    //   </Switch>
    // </Router>
  );
}

export default App;
