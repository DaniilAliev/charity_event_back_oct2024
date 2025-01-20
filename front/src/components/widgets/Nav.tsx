import Logo from '@/assets/svgs/logo.svg'
import { Button } from 'react-bootstrap'
import './Nav.scss'

const Nav = () => {
  return (
    <div className="nav">
        <div className='nav__left'>
          <Logo />
        </div>
        
        <div className='nav__center'>
          <p>Запросы о помощи</p>
        </div>

        <div className='nav__right'>
          <Button variant='outline-dark' >Войти</Button>
        </div>
    </div>
  )
}

export default Nav
