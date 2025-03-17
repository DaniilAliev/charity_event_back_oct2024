import Logo from '@/assets/svgs/logo.svg'
import { Button } from 'react-bootstrap'
import './Nav.scss'
import AuthService from '../../shared/api/auth';
import ProfileNav from '../ProfileNav/ProfileNav';

const Nav = () => {
  const cookies = AuthService.getCookie();

  return (
    <div className="nav">
      <div className='nav__container'>
        <div className='nav__left'>
          <Logo />
        </div>
        
        <div className='nav__center'>
          Запросы о помощи
        </div>

        <div className='nav__right'>
          {cookies ?<ProfileNav /> : <Button variant='outline-dark' >Войти</Button>}
        </div>
      </div>
    </div>
  )
}

export default Nav
