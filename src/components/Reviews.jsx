import { useState } from 'react'
import Modal from './Modal'

const Reviews = ({ reviews }) => {
  const [selectedReview, setSelectedReview] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (review) => {
    setSelectedReview(review)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedReview(null)
  }

  return (
    <section className="ref-reviews" id="reviews">
      <span className="ref-ring ref-ring--yellow ref-ring--reviews-left"></span>
      <span className="ref-ring ref-ring--purple ref-ring--reviews-right"></span>
      
      <div className="ref-container">
        <div className="ref-reviews__head">
          <h2>Отзывы наших учеников</h2>
        </div>

        <div className="ref-review-list">
          {reviews.map((review, index) => (
            <article key={index}>
              <h3>{review.name}</h3>
              <time>{review.date}</time>
              <p>{review.text}</p>
              <button 
                type="button"
                onClick={() => openModal(review)}
              >
                Читать полностью
              </button>
            </article>
          ))}
        </div>

        <div className="ref-review-dots">
          <button type="button" className="active"></button>
          <button type="button"></button>
        </div>

        <a className="ref-button ref-reviews__results-link" href="results.html">
          К полному списку результатов
        </a>
      </div>

      {/* Модальное окно — как в курсаче */}
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal}
        title="ОТЗЫВ"
      >
        {selectedReview && (
          <div className="review-modal-content">
            <p className="review-modal__name">{selectedReview.name}</p>
            <p className="review-modal__meta">
              <strong>Предмет:</strong> {selectedReview.subject || 'Математика'}
            </p>
            <p className="review-modal__meta">
              <strong>Тьютор:</strong> {selectedReview.tutor || 'Преподаватель Логос'}
            </p>
            <p className="review-modal__text">
              «{selectedReview.full || selectedReview.text}»
            </p>
            <a 
              href="results.html" 
              className="ref-button ref-button--purple"
              onClick={closeModal}
            >
              К полному списку результатов
            </a>
          </div>
        )}
      </Modal>
    </section>
  )
}

export default Reviews