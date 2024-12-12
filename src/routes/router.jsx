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
import MyCampaign from "../layouts/MyCampaign";
import UpdateCampaign from "../layouts/UpdateCampaign";
import MyDonations from "../layouts/MyDonations";

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
      {
        path: "/myCampaign",
        element: (
          <PrivateRoute>
            <MyCampaign />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/campaigns"),
      },
      {
        path: "/updateCampaign/:id",
        element: (
          <PrivateRoute>
            <UpdateCampaign />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/campaigns/${params.id}`),
      },
      {
        path: "/myDonations",
        element: (
          <PrivateRoute>
            <MyDonations />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/donation"),
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
