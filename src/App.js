
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/home';
import Utilitypages from './pages/utility pages';
import Blog from './pages/Blog';
import Page from './pages/page';
import Course from './pages/course';
import Shop from './pages/Shop';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home/>,
    },
    {
      path: "/page",
      element:<Page/>,
    },
    {
      path: "/course",
      element:<Course/>,
    },
    {
      path: "/Shop",
      element:<Shop/>,
    },
    {
      path: "/Utility pages",
      element:<Utilitypages/>,
    },
    {
      path: "/Blog",
      element:<Blog/>,
    },
  ]);
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
