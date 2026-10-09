const Courses = ({ courses }) => {
  return (
    <section className="ref-band ref-courses" id="courses">
      
      <span className="ref-ring ref-ring--purple ref-ring--course-left"></span>
      <span className="ref-ring ref-ring--purple ref-ring--course-right"></span>
      
      <div className="ref-container">
        <h2>Форматы обучения в Центре</h2>
        
        <div className="ref-courses__grid">
          <div className="ref-course-list">
            
            {courses.map((course, index) => (
              <article key={index}>
                <h3>{course.name}</h3>
                <p>{course.description}</p>
                <strong>{course.price}</strong>
                <button className="favorite-btn" type="button" aria-label="Добавить в избранное">♡</button>
              </article>
            ))}
            
            <a className="ref-button" href="courses.html">Смотреть все курсы</a>
          </div>
          
          <aside className="ref-test-card">
            <h3>Не знаешь,<br />что выбрать?</h3>
            <p>Пройди тест за 1 минуту</p>
            <button type="button">Начать тест</button>
          </aside>
        </div>
      </div>
    </section>
  )
}

export default Courses