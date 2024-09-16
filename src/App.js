import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./HomePage";
import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Login from "./Auth/Login";
import Body from "./Components/Body";
import ChooseProfile from "./Auth/ChooseProfile";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
      children: [
        {
          path: "/",
          element: <Body />,
        },
        {
          path: "login",
          element: <ChooseProfile />,
        },
        {
          path: "register",
          element: <Login />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
