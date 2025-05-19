import { createBrowserRouter, Navigate } from "react-router-dom";
import Notes from "./pages/Notes";
import Create from "./pages/Create";

export const router = createBrowserRouter([
    {
        path: '/notes',
        element: <Notes />,
        children: []
    },
    {
        path: '/',
        element: <Navigate to ="/notes" /> ,
        children: []
    },
    {
        path: '*',
        element: <Navigate to="/notes"/>,
        children: []
    },
    {
        path: '/create',
        element: <Create />,
        children: []
    }
]);