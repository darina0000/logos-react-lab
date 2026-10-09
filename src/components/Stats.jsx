const Stats = ({ orgName, stats }) => {
  return (
    <section className="ref-band ref-band--stats" id="about">
      <div className="ref-container">
        
        <h2>
          Центр "{orgName}"
          <br className="stats-mobile-break" />
          готовит к ЦТ
          <br />
          с 2009 года
        </h2>

        <div className="ref-stats">
          {stats.map((stat, index) => (
            <div key={index}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>

        <a className="ref-button" href="about.html">
          Подробнее о центре
        </a>
        
      </div>
    </section>
  )
}

export default Stats