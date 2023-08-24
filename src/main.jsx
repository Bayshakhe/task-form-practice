import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NetFeeRegForm from "./Components/NetFeeRegForm.jsx";
import FormClassCompo from "./Components/FormClassCompo.jsx";
import NestedFormProperty from "./Components/NestedFormProperty.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <NetFeeRegForm></NetFeeRegForm>,
      },
      {
        path: "/hookForm",
        element: <div>fdfedf</div>,
      },
      {
        path: "/class",
        element: <FormClassCompo></FormClassCompo>,
      },
      {
        path: "/nestedProperty",
        element: <NestedFormProperty></NestedFormProperty>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
