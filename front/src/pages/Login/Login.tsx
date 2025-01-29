import { useForm } from "react-hook-form"
import { TextField } from '@mui/material';
import LayoutSize from '../../components/layouts/LayoutSize/LayoutSize'
import './Login.scss'
import { Button } from 'react-bootstrap';
import { useAuth } from '../../shared/hooks/useAuth';

type Inputs = {
  login: string
  password: string
}

const Login = () => {
  const { mutateAsync } = useAuth()

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>()

  const onSubmit = async ({ login, password }: Inputs) => {
    await mutateAsync({ login, password })
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
                <TextField 
                  fullWidth 
                  id="outlined-basic" 
                  label="Введите пароль" 
                  variant="outlined" 
                  type='password' 
                  {...register('password')} 
                />
            </div>

            <Button className='login__form__button' type='submit' variant="primary">Войти</Button>
        </form>
      </div>
    </LayoutSize>
  )
}

export default Login
