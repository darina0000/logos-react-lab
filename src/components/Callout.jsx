const Callout = () => {
  return (
    <section className="ref-callout">
      
      <span className="ref-ring ref-ring--purple ref-ring--cta-left"></span>
      <span className="ref-ring ref-ring--yellow ref-ring--cta-right"></span>
      
      <div className="ref-container">
        <div className="ref-callout__box">
          
          <div>
            <h2>Пора готовиться<br />с Логосом!</h2>
            <p>Запишитесь на курс 2026/2027 учебного года и начните подготовку заранее</p>
            <a className="ref-button" href="register.html">Записаться</a>
          </div>

          <div className="ref-callout__person">
            <div className="ref-yellow-ring"></div>
            <img src="/images/home3.png" alt="Ученица с книгой" />
          </div>

        </div>
      </div>
    </section>
  )
}

export default Callout