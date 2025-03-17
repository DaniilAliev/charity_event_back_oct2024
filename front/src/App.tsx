import './App.css'
import axios, { isAxiosError } from 'axios'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ToastContainer, toast } from 'react-toastify';
import AuthService from './shared/api/auth'

interface CustomError extends Error {
  status?: number;
}

const MAX_RETRIES = 2
const HTTP_STATUS_TO_NOT_RETRY = new Set([400, 401, 403, 404])

axios.interceptors.request.use(
  (config) => {
    const token = AuthService.getCookie();
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: (failureCount, error) => {
        if (failureCount > MAX_RETRIES) {
          return false
        }

        if (
          isAxiosError(error) &&
          HTTP_STATUS_TO_NOT_RETRY.has(error.response?.status ?? 0)
        ) {
          return false
        }

        return true
      }
    },
    mutations: {
      onError: (error: CustomError) => {
        if (error?.status === 500) {
          toast.error("Серверная ошибка")
        }
      }
    }
  }
})

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ToastContainer />
      </QueryClientProvider>
    </>
  )
}

export default App
