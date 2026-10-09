import { Link } from 'react-router-dom'

const Footer = ({ orgName }) => {
  return (
    <footer className="ref-footer">
      <div className="ref-container">
        <Link to="/" className="ref-logo">
          <img src="/images/logo.png" alt={orgName} />
        </Link>

        <nav>
          <a href="#about">О центре</a>
          <Link to="/courses">Курсы</Link>
          <a href="#teachers">Преподаватели</a>
          <a href="#reviews">Результаты</a>
          <a href="contacts.html">Контакты</a>
        </nav>

        <strong>+375 (29) 123-45-67</strong>
      </div>
    </footer>
  )
}

export default Footer