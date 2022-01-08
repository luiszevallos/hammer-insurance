import React, { useState, useEffect } from 'react'
import GrupoIcon from '../assets/Grupo2030.png'
import GrupoIcon2 from '../assets/Grupo2031.png'
import GrupoIcon3 from '../assets/Grupo2032.png'
import GrupoIcon4 from '../assets/Grupo3231.svg'

export default function ReviewSection() {
  const [reviews, setReviews] = useState(0)

  useEffect(() => {
    setReviews(324)
  }, [])

  return (
    <section className="review-home">
      <div className="review-home-v2">
        <img className="reviews-image-v2" src={GrupoIcon4} alt="image2030" />
        <div>
          <span className="text-small text-light">
            {`(${reviews} Reviews de Clientes)`}
          </span>
        </div>
      </div>
      <div className="review-home-v2">
        <div className="reviews-container-image">
          <img className="reviews-image" src={GrupoIcon} alt="image2030" />
        </div>
        <div className="reviews-container-image">
          <img className="reviews-image" src={GrupoIcon2} alt="image2031" />
        </div>
        <div className="reviews-container-image">
          <img className="reviews-image" src={GrupoIcon3} alt="image2032" />
        </div>
      </div>
    </section>
  )
}