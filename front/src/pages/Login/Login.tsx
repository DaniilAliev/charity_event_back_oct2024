import { TextField } from '@mui/material';
import LayoutSize from '../../components/layouts/LayoutSize/LayoutSize'
import './Login.scss'
import { Button } from 'react-bootstrap';

const Login = () => {
  return (
    <LayoutSize>
      <div className='login'>
        <h4>Авторизация</h4>

        <form className='login__form' action="">
            <h5>Вход</h5>

            <div className='login__form__inputs'>
                <TextField fullWidth id="outlined-basic" label="Введите Email" variant="outlined" />
                <TextField fullWidth id="outlined-basic" label="Введите пароль" variant="outlined" type='password'/>
            </div>

            <Button className='login__form__button' type='submit' variant="primary">Войти</Button>
        </form>
      </div>
    </LayoutSize>
  )
}

export default Login
