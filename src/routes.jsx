import { createBrowserRouter, Navigate } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Notes />,
        children: []
    },
    {
        path: '/create',
        element: <Create />,
        children: []
    }
]);