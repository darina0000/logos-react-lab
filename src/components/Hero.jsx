const Hero = () => {
  return (
    <section className="ref-hero">
      <div className="ref-container">
        <div className="ref-hero__inner">
                    
          <div className="ref-hero__content">
            <h1>Подготовка к ЦТ</h1>
                       
            <div className="ref-features">
              <div className="ref-feature ref-feature--score">
                <img src="/images/feature-80.png" alt="80+" />
                <strong>Готовим на баллы 80+</strong>
              </div>
              
              <div className="ref-feature ref-feature--online">
                <img src="/images/feature-online.png" alt="Онлайн" />
                <strong>Подготовка очно и онлайн</strong>
              </div>
              
              <div className="ref-feature ref-feature--experience">
                <img src="/images/feature-experience.png" alt="Опыт" />
                <strong>Более 10 лет опыта</strong>
              </div>
              
              <div className="ref-feature ref-feature--license">
                <img src="/images/feature-license.png" alt="Лицензия" />
                <strong>Лицензионные программы</strong>
              </div>
            </div>
                        
            <div className="ref-hero__bottom">
              <p>Центр "Логос" приглашает на курсы ЦТ по всем предметам. Подготовка с гарантией 20+ баллов к вашему результату.</p>
              <button className="ref-button ref-button--green">Подробнее</button>
            </div>
          </div>
                    
          <div className="ref-hero__visual">
            <div className="ref-yellow-ring"></div>
            <img src="/images/home1.png" alt="Студентка" />
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Hero