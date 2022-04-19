import { Link } from 'react-router-dom'

import '../../styles/index.scss'

import { data } from './data'

import useResponsiveMenuHook from '../../hooks/useResponsiveMenuHook'

const Header = () => {
  const {responsiveMenu, setResponsiveMenu} = useResponsiveMenuHook()

  return (
    <header className='header'>
      <div className="wrap">
        <div className="header__container">
          <h1 className="header__logo">
            <Link className='header__logo-link' to={'/'}>{data.logo}</Link>
          </h1>
          <nav className={responsiveMenu ? 'header__navbar header__navbar--open' : 'header__navbar'}>
            <ul className="header__menu">
              {data.pages.map((page, index) => ((
                <li key={index} className="header__menu-item">
                  <Link className="header__menu-link" to={page.link} onClick={() => setResponsiveMenu(false)}>{page.name}</Link>
                </li>
              )))}
            </ul>
          </nav>
          <Link to={'*'} className="main-btn">{data.btn}</Link>
          <button className={responsiveMenu ? 'header__toggle header__toggle--clicked' : 'header__toggle'} onClick={() => setResponsiveMenu(prevstate => !prevstate)}>
            <span className="sr-only"></span>
            <span className="hamburger"></span>
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header