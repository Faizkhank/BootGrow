import Home from "./component/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
  ]);
  return (
    <div className=" relative z-10">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
