import './ProfileNav.scss'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import Person2SharpIcon from '@mui/icons-material/Person2Sharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../router/constants';
import AuthService from '../../../shared/api/auth';

const ProfileNav = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const handleClick = () => {
        setIsOpen(prev => !prev)
    }

    const handleLogout = () => {
        AuthService.logout()
    }

    const dropdownLinks = [
        {
            name: 'Мой профиль',
            path: ROUTES.PROFILE,
            onClick: () => {},
            icon: <Person2SharpIcon color='disabled' />
        },
        {
            name: 'Выйти',
            path: ROUTES.LOGIN,
            onClick: handleLogout,
            icon: <ExitToAppSharpIcon color='disabled' />
        }
    ]

    return (
        <div className='profile-nav'>
            <div onClick={handleClick}>
                <AccountCircleRoundedIcon color='disabled' fontSize='large'/>
                {isOpen && <div className='profile-nav__dropdown'>
                    {dropdownLinks.map(link => (
                        <div className='profile-nav__link-container'>
                            {link.icon}
                            <Link key={link.name} to={link.path} onClick={link.onClick} className='profile-nav__link'>{link.name}</Link>
                        </div>
                    ))}
                </div>}
            </div>   
        </div>
    )
}

export default ProfileNav
