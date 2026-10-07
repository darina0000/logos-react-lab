const Stats = () => {
  return (
    <section className="ref-band ref-band--stats" id="about">
      <div className="ref-container">
        
        <h2>
          Центр "Логос"
          <br className="stats-mobile-break" />
          готовит к ЦТ
          <br />
          с 2009 года
        </h2>

        <div className="ref-stats">
          <div>
            <strong>20</strong>
            <span>Преподавателей</span>
          </div>
          <div>
            <strong>20+</strong>
            <span>Баллов к вашему результату</span>
          </div>
          <div>
            <strong>80%</strong>
            <span>Учеников поступают в вуз на бюджет</span>
          </div>
          <div>
            <strong>5000</strong>
            <span>Выпускников за все время работы</span>
          </div>
        </div>

        <a className="ref-button" href="about.html">
          Подробнее о центре
        </a>
        
      </div>
    </section>
  )
}

export default Stats