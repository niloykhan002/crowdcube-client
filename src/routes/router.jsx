import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../layouts/Home";
import ErrorPage from "../layouts/ErrorPage";
import Login from "../layouts/Login";
import Register from "../layouts/Register";
import AddNewCampaign from "../layouts/AddNewCampaign";
import PrivateRoute from "./PrivateRoute";
import AllCampaigns from "../layouts/AllCampaigns";
import CampaignDetails from "../layouts/CampaignDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCampaign",
        element: (
          <PrivateRoute>
            <AddNewCampaign />
          </PrivateRoute>
        ),
      },
      {
        path: "/campaigns",
        element: <AllCampaigns />,
        loader: () => fetch("http://localhost:5000/campaigns"),
      },
      {
        path: "/campaign/:id",
        element: (
          <PrivateRoute>
            <CampaignDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaigns/${params.id}`),
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
