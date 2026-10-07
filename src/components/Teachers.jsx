const Teachers = () => {
  return (
    <section className="ref-band ref-teacher" id="teachers">
      
      <span className="ref-ring ref-ring--purple ref-ring--teacher-left"></span>
      <span className="ref-ring ref-ring--purple ref-ring--teacher-right"></span>
      
      <div className="ref-container">
        
        <h2>Наши преподаватели</h2>

        <div className="ref-teacher__grid">
          
          <div className="ref-teacher__photo">
            <img src="/images/home-teacher.png" alt="Преподаватель Галина Семеновна" />
            <button className="ref-teacher__arrow ref-teacher__arrow--prev" type="button" aria-label="Предыдущий преподаватель">‹</button>
            <button className="ref-teacher__arrow ref-teacher__arrow--next" type="button" aria-label="Следующий преподаватель">›</button>
          </div>

          <div className="ref-teacher__info">
            
            <span className="ref-subject-pill">Физика</span>
            
            <h3>
              ВОЛКОВА
              <br />
              <small>Галина Семеновна</small>
            </h3>

            <div className="ref-teacher__numbers">
              <div>
                <strong>15</strong>
                <span>лет опыта подготовки к ЦТ</span>
              </div>
              <div>
                <strong>8</strong>
                <span>лет работает в Центре "Логос"</span>
              </div>
            </div>

            <a className="ref-button" href="teachers.html">Подробнее</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Teachers