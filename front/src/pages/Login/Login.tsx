import { useForm } from "react-hook-form"
import { TextField } from '@mui/material';
import LayoutSize from '../../components/layouts/LayoutSize/LayoutSize'
import './Login.scss'
import { Button } from 'react-bootstrap';
import { useAuth } from '../../shared/hooks/useAuth';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

type Inputs = {
  login: string
  password: string
}

const Login = () => {
  const [error, setError] = useState<boolean | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const { mutateAsync: auth } = useAuth()

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit = async ({ login, password }: Inputs) => {
    try {
      setIsLoading(true)
      setError(false)

      await auth({ login, password })

      navigate('/')
    } catch (error) {
      const typedError = error as AxiosError
      if (typedError.status === 400) {
        setError(true)
      }
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <LayoutSize>
      <div className='login'>
        <h4>Авторизация</h4>

        <form className='login__form' action="" onSubmit={handleSubmit(onSubmit)}>
            <h5>Вход</h5>

            <div className='login__form__inputs'>
                <TextField 
                  fullWidth
                  id="outlined-basic" 
                  label="Введите Email" 
                  variant="outlined" 
                  {...register('login')} 
                />
                <div className='login__form__error'>{error && `Указан неверный Логин`}</div>
                <TextField 
                  fullWidth 
                  id="outlined-basic" 
                  label="Введите пароль" 
                  variant="outlined" 
                  type='password' 
                  {...register('password')} 
                />
                <div className='login__form__error'>{error && `Указан неверный Пароль`}</div>
            </div>

            <Button disabled={isLoading} className='login__form__button' type='submit' variant="primary">Войти</Button>
        </form>
      </div>
    </LayoutSize>
  )
}

export default Login
