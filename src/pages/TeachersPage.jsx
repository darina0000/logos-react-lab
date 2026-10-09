import { useState } from 'react'
import { Link } from 'react-router-dom'
import { teachers } from '../data'

const TeachersPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const currentTeacher = teachers[currentIndex]

  const nextTeacher = () => {
    setCurrentIndex((prev) => (prev + 1) % teachers.length)
  }

  const prevTeacher = () => {
    setCurrentIndex((prev) => (prev - 1 + teachers.length) % teachers.length)
  }

  return (
    <main className="teachers-page">
      <div className="ref-container">
        
        {/* Хлебные крошки */}
        <div className="teachers-breadcrumb">
          <Link to="/">Главная</Link>
          <span>›</span>
          <strong>Преподаватели</strong>
        </div>

        <div className="teachers-band">
          <h1>Команда центра «Логос»</h1>

          <div className="teachers-layout">
            
            {/* Миниатюры преподавателей слева */}
            <div className="teacher-thumbs">
              {teachers.map((teacher, index) => (
                <button
                  key={teacher.id}
                  type="button"
                  className={index === currentIndex ? 'is-active' : ''}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={teacher.name}
                >
                  <img src={teacher.image} alt={teacher.name} />
                </button>
              ))}
            </div>

            {/* Большое фото преподавателя в центре */}
            <div className="teachers-photo-card">
              <img src={currentTeacher.image} alt={currentTeacher.name} />
              <button 
                type="button"
                className="teachers-arrow teachers-arrow--prev" 
                onClick={prevTeacher}
                aria-label="Предыдущий преподаватель"
              >
                ‹
              </button>
              <button 
                type="button"
                className="teachers-arrow teachers-arrow--next" 
                onClick={nextTeacher}
                aria-label="Следующий преподаватель"
              >
                ›
              </button>
            </div>

            {/* Информация о преподавателе справа */}
            <div className="teacher-profile">
              <div className="teacher-profile__head">
                <h2>
                  <span>{currentTeacher.surname}</span>
                  <small>{currentTeacher.name}</small>
                </h2>
                <span className="teacher-subject-pill">{currentTeacher.subject}</span>
              </div>

              {/* Блок "Образование" */}
              <div className="teacher-metric-group">
                <h3>Образование</h3>
                <div className="teacher-metrics">
                  <div>
                    <strong>{currentTeacher.educationYears}</strong>
                    <span>{currentTeacher.educationUnit}</span>
                    <span>{currentTeacher.educationText}</span>
                  </div>
                  <div>
                    <strong>{currentTeacher.experience}</strong>
                    <span>лет</span>
                    <span>опыт подготовки к ЦТ</span>
                  </div>
                  <div>
                    <strong>{currentTeacher.center}</strong>
                    <span>лет</span>
                    <span>работает в Центре "Логос"</span>
                  </div>
                </div>
              </div>

              {/* Блок "Достижения" */}
              <div className="teacher-metric-group">
                <h3>Достижения</h3>
                <div className="teacher-achievements">
                  {currentTeacher.achievements.map((achievement, index) => (
                    <div key={index}>
                      <img src={achievement.icon} alt="" aria-hidden="true" />
                      <strong>{achievement.text}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Блок "Результаты учеников" */}
              <div className="teacher-metric-group">
                <h3>Результаты учеников</h3>
                <div className="teacher-results">
                  {currentTeacher.results.map((result, index) => (
                    <div key={index}>
                      <strong>{result.value}</strong>
                      <span>{result.text}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </main>
  )
}

export default TeachersPage