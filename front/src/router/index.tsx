import { createBrowserRouter } from 'react-router-dom'
import LayoutDefault from '../components/layouts/LayoutDefault/LayoutDefault'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <LayoutDefault />
    }
])