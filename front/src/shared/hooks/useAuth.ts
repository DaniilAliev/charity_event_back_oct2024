import { useMutation } from "@tanstack/react-query"
import authService from "../api/auth"

export const useAuth = () => 
        useMutation({
            mutationFn: ({login, password} : {login: string, password: string}) => authService.auth({login, password})
        })