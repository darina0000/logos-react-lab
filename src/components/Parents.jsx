const Parents = () => {
  return (
    <section className="ref-parents">
      
      <span className="ref-ring ref-ring--purple ref-ring--left"></span>
      
      <div className="ref-container">
        
        <h2>
          Почему родители
          <br />
          выпускников выбирают
          <br />
          "Логос"?
        </h2>

        <div className="ref-parents__grid">
          
          <div className="ref-score-list">
            <div>
              <strong>83</strong>
              <span>баллов средний результат учеников в ЛОГОСе</span>
            </div>
            <div>
              <strong>20+</strong>
              <span>баллов к своему начальному уровню</span>
            </div>
            <div>
              <strong>25+</strong>
              <span>балла выше результат, чем в среднем по стране</span>
            </div>
          </div>

          <div className="ref-checks">
            <article>
              <h3>Поддержка 24/7</h3>
              <p>Наставник ученика, который всегда на связи с ним и родителями.</p>
            </article>
            <article>
              <h3>Гарантия результата</h3>
              <p>Продуманная система сопровождения помогает получить гарантированный рост.</p>
            </article>
            <article>
              <h3>Индивидуальный подход</h3>
              <p>Фиксируем цель подготовки и определяем понятный маршрут.</p>
            </article>
            <article>
              <h3>Отслеживание результата</h3>
              <p>Показываем усвоение материала на каждом этапе обучения.</p>
            </article>
          </div>
         
          <div className="ref-person ref-person--parents">
            <div className="ref-person-ring"></div>
            <img src="/images/home2.png" alt="Ученица с книгой" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Parents