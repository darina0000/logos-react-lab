const Header = () => {
  return (
    <header className="ref-header">
      <div className="ref-container ref-header__inner">
        <a className="ref-logo" href="index.html">
          <img src="/images/logo.png" alt="Центр Логос" />
        </a>

        <button className="burger" type="button" aria-label="Открыть меню">
          ☰
        </button>

        <nav className="site-nav ref-nav">
          <a href="#about">О центре</a>
          <a href="#courses">Курсы</a>
          <a href="#teachers">Преподаватели</a>
          <a href="#reviews">Результаты</a>
          <a href="contacts.html">Контакты</a>
        </nav>

        <div className="ref-header__tools">
          <a className="ref-account" href="login.html">
            <span className="ref-account__text">Кабинет</span>
            <img src="/images/user.png" alt="" aria-hidden="true" />
          </a>

          <div className="ref-switchers">
            <div className="ref-segment" role="group" aria-label="Переключение языка">
              <button type="button" data-lang-choice="ru">RU</button>
              <span>/</span>
              <button type="button" data-lang-choice="en">EN</button>
            </div>
            <div className="ref-segment" role="group" aria-label="Переключение темы">
              <button type="button" data-theme-choice="dark">Dark</button>
              <span>/</span>
              <button type="button" data-theme-choice="light">Light</button>
            </div>
          </div>

          <button className="ref-eye-button" type="button" data-modal-open="settings" aria-label="Версия для слабовидящих">
            <img src="/images/eyes.png" alt="" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header