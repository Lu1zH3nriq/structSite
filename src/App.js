import Home from "./pages/home";
import Projetos from "./pages/projetos";
import Contato from "./pages/contato";

import {createBrowserRouter, RouterProvider} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/Projetos",
      element: <Projetos/>
    },
    {
      path: "/Contato",
      element: <Contato/>
    }
  ]);


  return(
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App;
