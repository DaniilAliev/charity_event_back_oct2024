import Logo from '@/assets/svgs/logo.svg'
import { Button } from 'react-bootstrap'
import './Nav.scss'

const Nav = () => {
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
          <Button variant='outline-dark' >Войти</Button>
        </div>
      </div>
    </div>
  )
}

export default Nav
