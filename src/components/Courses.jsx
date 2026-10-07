const Courses = () => {
  return (
    <section className="ref-band ref-courses" id="courses">
      
      <span className="ref-ring ref-ring--purple ref-ring--course-left"></span>
      <span className="ref-ring ref-ring--purple ref-ring--course-right"></span>
      
      <div className="ref-container">
        
        <h2>Форматы обучения в Центре</h2>

        <div className="ref-courses__grid">
          
          <div className="ref-course-list">
            
            <article>
              <h3>Математика</h3>
              <p>Интенсив для поступления в технические специальности</p>
              <strong>от 120 BYN</strong>
              <button className="favorite-btn" type="button" aria-label="Добавить в избранное">♡</button>
            </article>

            <article>
              <h3>Физика</h3>
              <p>Решение задач повышенной сложности</p>
              <strong>от 140 BYN</strong>
              <button className="favorite-btn" type="button" aria-label="Добавить в избранное">♡</button>
            </article>

            <article>
              <h3>Русский язык</h3>
              <p>Разбор тестов и написание эссе</p>
              <strong>от 95 BYN</strong>
              <button className="favorite-btn" type="button" aria-label="Добавить в избранное">♡</button>
            </article>

            <article>
              <h3>Английский язык</h3>
              <p>Подготовка к ЦТ и международным экзаменам</p>
              <strong>от 110 BYN</strong>
              <button className="favorite-btn" type="button" aria-label="Добавить в избранное">♡</button>
            </article>

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