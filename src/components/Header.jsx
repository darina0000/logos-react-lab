import { Link } from 'react-router-dom'

const Header = ({ orgName }) => {
  return (
    <header className="ref-header">
      <div className="ref-container ref-header__inner">
        <Link to="/" className="ref-logo">
          <img src="/images/logo.png" alt={orgName} />
        </Link>

        <button className="burger" type="button" aria-label="Открыть меню">
          ☰
        </button>

        <nav className="site-nav ref-nav">
          <a href="#about">О центре</a>
          <Link to="/courses">Курсы</Link>
          <Link to="/teachers">Преподаватели</Link>
          <a href="#reviews">Результаты</a>
          <a href="contacts.html">Контакты</a>
        </nav>

        <div className="ref-header__tools">
          <Link to="/login" className="ref-account">
            <span className="ref-account__text">Кабинет</span>
            <img src="/images/user.png" alt="" aria-hidden="true" />
          </Link>

          <div className="ref-switchers">
            <div className="ref-segment" role="group" aria-label="Переключение языка">
              <button type="button">RU</button>
              <span>/</span>
              <button type="button">EN</button>
            </div>
            <div className="ref-segment" role="group" aria-label="Переключение темы">
              <button type="button">Dark</button>
              <span>/</span>
              <button type="button">Light</button>
            </div>
          </div>

          <button className="ref-eye-button" type="button" aria-label="Версия для слабовидящих">
            <img src="/images/eyes.png" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header