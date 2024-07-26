import {
    createBrowserRouter,
  } from "react-router-dom";
import  DemoPage  from "../pages/demo/demo";

const routes =[{
    path: "/",
    element: <DemoPage />,
}]
const router = createBrowserRouter(routes)

export default router;