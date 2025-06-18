import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
  type RouteObject,
} from "react-router-dom";
import type { FC } from "react";
import { PAGES } from "./routes";
import { MainPage } from "../pages/MainPage/MainPage";

const routesObjects: RouteObject[] = [
  {
    path: PAGES.MAIN,
    element: <MainPage />,
  },
  {
    path: PAGES.NOT_FOUND,
    element: <Navigate to={PAGES.MAIN} replace />,
  },
];

export const BrowserRouterService = createBrowserRouter(routesObjects);

export const Router: FC = () => {
  return <RouterProvider router={BrowserRouterService} />;
};
