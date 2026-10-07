const Header = () => {
  return (
    <header className="ref-header">
      <div className="ref-container">
        <div className="ref-header__inner">
          <a href="/" className="ref-logo">
            <img src="/images/logo.png" alt="Центр Логос" />
          </a>

          <nav className="ref-nav">
            <a href="#about">О центре</a>
            <a href="#courses">Курсы</a>
            <a href="#teachers">Преподаватели</a>
            <a href="#reviews">Результаты</a>
            <a href="contacts.html">Контакты</a>
          </nav>

          <div className="ref-header__tools">
            <a href="login.html" className="ref-account">
              Кабинет
              <img src="/images/user.png" alt="" />
            </a>

            <div className="ref-switchers">
              <div className="ref-segment">
                <button type="button">RU</button>
                <span>/</span>
                <button type="button">EN</button>
              </div>
              <div className="ref-segment">
                <button type="button">Dark</button>
                <span>/</span>
                <button type="button">Light</button>
              </div>
            </div>

            <button className="ref-eye-button" type="button" aria-label="Версия для слабовидящих">
              <img src="/images/eyes.png" alt="" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header