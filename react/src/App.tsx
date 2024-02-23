import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/home";

function App() {
  const routes = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<HomePage />} />));

  return <RouterProvider router={routes} />;
}

export default App;
