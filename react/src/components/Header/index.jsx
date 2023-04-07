import './index.scss';

const Header = ()=>{
    return <header>
        <div className="container">
            <nav className="nav">
                <ul className="nav__list">
                    <li className="nav__item"><a href="#" className="nav__link">Works</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Blog</a></li>
                    <li className="nav__item"><a href="#" className="nav__link">Contact</a></li>
                </ul>
                <div className="nav__menu">
                    <span className="nav__menu__line"></span>
                    <span className="nav__menu__line"></span>
                    <span className="nav__menu__line"></span>
                </div>
            </nav>
        </div>
    </header>
}

export default Header;