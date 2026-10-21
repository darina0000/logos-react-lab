import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <main className="error-main">
      <div className="ref-container">
        <div className="error-card">
          <span>404</span>
          <h1>Страница не найдена</h1>
          <p>
            Похоже, вы ввели неверный адрес или страница была перемещена. 
            Давайте вернемся на главную.
          </p>
          <div className="error-actions">
            <Link to="/" className="ref-button ref-button--green">
              На главную
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}

export default NotFound