import { createBrowserRouter } from 'react-router-dom'
import LayoutDefault from '../components/layouts/LayoutDefault/LayoutDefault'
import { ROUTES } from './constants'
import Login from '../pages/Login/Login'

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <LayoutDefault />,
        children: [
            {
                path: ROUTES.LOGIN,
                element: <Login />
            }
        ]
    }
])