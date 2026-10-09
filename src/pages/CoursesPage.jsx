import { useState, useEffect, useMemo } from 'react'
import { Link } from 'react-router-dom'

const CoursesPage = () => {
  const [courses, setCourses] = useState([])
  const [favorites, setFavorites] = useState([])
  const [search, setSearch] = useState('')
  const [format, setFormat] = useState('any')
  const [selectedSubjects, setSelectedSubjects] = useState([])
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 6

  const subjects = [
    { id: 'math', name: 'Математика' },
    { id: 'russian', name: 'Русский язык' },
    { id: 'english', name: 'Английский язык' },
    { id: 'physics', name: 'Физика' },
    { id: 'chemistry', name: 'Химия' },
    { id: 'biology', name: 'Биология' },
    { id: 'history', name: 'История' },
    { id: 'social', name: 'Обществоведение' }
  ]

  // Загрузка курсов из JSON
  useEffect(() => {
    fetch('/data/db.json')
      .then(res => res.json())
      .then(data => setCourses(data.courses))
      .catch(err => console.error('Ошибка загрузки:', err))
  }, [])

  // Вычисляем отфильтрованные курсы через useMemo 
  const filteredCourses = useMemo(() => {
    let result = [...courses]

    if (search) {
      result = result.filter(c => 
        c.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (format !== 'any') {
      result = result.filter(c => c.format === format)
    }

    if (selectedSubjects.length > 0) {
      result = result.filter(c => selectedSubjects.includes(c.subject))
    }

    if (priceMin) {
      result = result.filter(c => c.price >= Number(priceMin))
    }
    if (priceMax) {
      result = result.filter(c => c.price <= Number(priceMax))
    }

    return result
  }, [courses, search, format, selectedSubjects, priceMin, priceMax])

  // Пагинация — тоже через useMemo
  const paginatedCourses = useMemo(() => {
    return filteredCourses.slice((currentPage - 1) * perPage, currentPage * perPage)
  }, [filteredCourses, currentPage, perPage])

  const totalPages = Math.ceil(filteredCourses.length / perPage)
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    )
  }

  const toggleSubject = (subjectId) => {
    setSelectedSubjects(prev => 
      prev.includes(subjectId)
        ? prev.filter(s => s !== subjectId)
        : [...prev, subjectId]
    )
    setCurrentPage(1)
  }

  const resetFilters = () => {
    setSearch('')
    setFormat('any')
    setSelectedSubjects([])
    setPriceMin('')
    setPriceMax('')
    setCurrentPage(1)
  }

  return (
    <main className="courses-page">
      <div className="ref-container courses-catalog">
        
        <div className="courses-breadcrumb">
          <Link to="/">Главная</Link>
          <span>›</span>
          <strong>Каталог</strong>
        </div>

        <h1>Каталог курсов</h1>

        <div className="courses-catalog__grid">
          
          <aside className="course-filter-panel">
            <div className="course-filter-panel__head">
              <h2>Фильтры</h2>
              <button onClick={resetFilters}>Сбросить</button>
            </div>

            <form>
              <div className="course-search">
                <input 
                  type="text" 
                  placeholder="Поиск по предмету"
                  value={search}
                  onChange={(e) => { setSearch(e.target.value); setCurrentPage(1) }}
                />
              </div>

              <div className="course-select">
                <span>Формат обучения</span>
                <select value={format} onChange={(e) => { setFormat(e.target.value); setCurrentPage(1) }}>
                  <option value="any">Любой</option>
                  <option value="offline">Офлайн</option>
                  <option value="online">Онлайн</option>
                </select>
              </div>

              <div className="course-subjects">
                <p>Предмет</p>
                {subjects.map(subject => (
                  <label key={subject.id}>
                    <span>{subject.name}</span>
                    <input 
                      type="checkbox"
                      checked={selectedSubjects.includes(subject.id)}
                      onChange={() => toggleSubject(subject.id)}
                    />
                  </label>
                ))}
              </div>

              <div className="course-price-row">
                <label>
                  <span>Цена от</span>
                  <input 
                    type="number" 
                    placeholder="0"
                    value={priceMin}
                    onChange={(e) => { setPriceMin(e.target.value); setCurrentPage(1) }}
                  />
                </label>
                <label>
                  <span>до</span>
                  <input 
                    type="number" 
                    placeholder="1000"
                    value={priceMax}
                    onChange={(e) => { setPriceMax(e.target.value); setCurrentPage(1) }}
                  />
                </label>
              </div>
            </form>
          </aside>

          <div className="courses-results">
            <div className="courses-list">
              {paginatedCourses.map(course => (
                <article key={course.id} className="course-card">
                  <h3>{course.title}</h3>
                  <p>{course.description}</p>
                  <span>{course.format === 'online' ? 'Онлайн' : 'Офлайн'}</span>
                  <strong>{course.price} BYN</strong>
                  <Link to={`/courses/${course.id}`} className="course-card__button">
                    Подробнее
                  </Link>
                  <button 
                    className={`course-card__favorite favorite-btn ${favorites.includes(course.id) ? 'is-active' : ''}`}
                    onClick={() => toggleFavorite(course.id)}
                    aria-label="Добавить в избранное"
                  >
                    {favorites.includes(course.id) ? '♥' : '♡'}
                  </button>
                </article>
              ))}
            </div>

            <div className="courses-pagination">
              {pages.map(page => (
                <button 
                  key={page}
                  className={page === currentPage ? 'active' : ''}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

export default CoursesPage