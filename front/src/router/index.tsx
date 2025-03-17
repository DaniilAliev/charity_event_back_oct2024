import { createBrowserRouter } from 'react-router-dom'

import { ROUTES } from './constants'
import Login from '../pages/Login/Login'
import Main from '../pages/Main/Main'
import LayoutDefault from '../layouts/LayoutDefault/LayoutDefault'

export const router = createBrowserRouter([
    {
        path: ROUTES.MAIN,
        element: <LayoutDefault />,
        children: [
            {
                path: ROUTES.MAIN,
                element: <Main />
            },
            {
                path: ROUTES.LOGIN,
                element: <Login />
            }
        ]
    }
])