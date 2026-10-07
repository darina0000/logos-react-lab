const Reviews = () => {
  return (
    <section className="ref-reviews" id="reviews">
      
      <span className="ref-ring ref-ring--yellow ref-ring--reviews-left"></span>
      <span className="ref-ring ref-ring--purple ref-ring--reviews-right"></span>
      
      <div className="ref-container">
        
        <div className="ref-reviews__head">
          <h2>Отзывы наших учеников</h2>
        </div>

        <div className="ref-review-list">
          
          <article>
            <h3>Анна Павлова</h3>
            <time>10.06.26</time>
            <p>Занятия по математике помогли мне наконец разобраться с задачами повышенной сложности. Преподаватель объясняет спокойно, мы много практиковались на тестах, и итоговый балл стал заметно выше.</p>
            <button type="button">Читать полностью</button>
          </article>

          <article>
            <h3>Мария Литвин</h3>
            <time>18.06.26</time>
            <p>Курс по русскому языку оказался очень полезным: разобрали типовые ошибки, пунктуацию и формат теста. После оплаты и прохождения занятий я стала увереннее выполнять задания.</p>
            <button type="button">Читать полностью</button>
          </article>

          <article>
            <h3>Анна Павлова</h3>
            <time>12.06.26</time>
            <p>Интенсив по русскому языку помог быстро закрыть пробелы перед тестированием. Разобрали сложные случаи, пунктуацию и типовые ловушки, стало гораздо спокойнее идти на экзамен.</p>
            <button type="button">Читать полностью</button>
          </article>

        </div>

        <div className="ref-review-dots">
          <button type="button" className="active"></button>
          <button type="button"></button>
        </div>

        <a className="ref-button ref-reviews__results-link" href="results.html">
          К полному списку результатов
        </a>

      </div>
    </section>
  )
}

export default Reviews