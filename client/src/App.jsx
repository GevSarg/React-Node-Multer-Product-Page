import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ROUTES from "./routes";
import Layouts from "./pages/Layouts";
import { Add, Edit, Error, Product, Products } from "./pages";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path={ROUTES.Products} element={<Layouts />}>
          <Route index element={<Products />} />
          <Route path={ROUTES.Product} element={<Product />} />
          <Route path={ROUTES.Edit} element={<Edit />} />
          <Route path={ROUTES.Add} element={<Add />} />
          <Route path={ROUTES.Error} element={<Error />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
