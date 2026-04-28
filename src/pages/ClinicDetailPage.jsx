import { useParams, useNavigate } from 'react-router-dom'
import { ArrowLeft, Heart, Phone, MapPin, Clock, Globe, Star } from 'lucide-react'
import { clinics, SPECIALTY_COLORS } from '../data/clinics'
import './ClinicDetailPage.css'

export default function ClinicDetailPage({ favorites, toggleFavorite }) {
  const { id } = useParams()
  const navigate = useNavigate()
  const clinic = clinics.find(c => c.id === id)
  const isFavorite = favorites.includes(id)

  if (!clinic) {
    return (
      <div className="detail-page">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <p>한의원을 찾을 수 없습니다</p>
      </div>
    )
  }

  return (
    <div className="detail-page">
      {/* Header */}
      <div className="detail-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <ArrowLeft size={20} />
        </button>
        <h1>{clinic.name}</h1>
        <button
          className="favorite-btn"
          onClick={() => toggleFavorite(clinic.id)}
        >
          <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} color={isFavorite ? '#EF4444' : '#ccc'} />
        </button>
      </div>

      {/* Hero */}
      <div className="hero-section">
        <div className="hero-icon">韓</div>
        <div className="hero-info">
          <h2>{clinic.name}</h2>
          <div className="hero-meta">
            <div className="meta-item">
              <Star size={16} fill="#F59E0B" color="#F59E0B" />
              <span>{clinic.rating.toFixed(1)}</span>
              <span className="meta-label">({clinic.reviewCount})</span>
            </div>
            <div className="meta-item">
              <MapPin size={16} />
              <span>{clinic.district}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Specialties */}
      <section className="section">
        <h3>전문 특화분야</h3>
        <div className="specialties">
          {clinic.specialties.map(s => (
            <span key={s} className="specialty-badge" style={{ backgroundColor: SPECIALTY_COLORS[s] + '22', color: SPECIALTY_COLORS[s] }}>
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Description */}
      <section className="section">
        <h3>한의원 소개</h3>
        <p className="description">{clinic.description}</p>
      </section>

      {/* Contact */}
      <section className="section">
        <h3>연락처 및 위치</h3>
        <div className="contact-info">
          <div className="contact-item">
            <MapPin size={18} />
            <div>
              <div className="contact-label">주소</div>
              <div className="contact-value">{clinic.address}</div>
            </div>
          </div>
          <div className="contact-item">
            <Phone size={18} />
            <div>
              <div className="contact-label">전화</div>
              <a href={`tel:${clinic.phone}`} className="contact-value contact-link">
                {clinic.phone}
              </a>
            </div>
          </div>
          {clinic.website && (
            <div className="contact-item">
              <Globe size={18} />
              <div>
                <div className="contact-label">홈페이지</div>
                <a href={clinic.website} target="_blank" rel="noopener noreferrer" className="contact-value contact-link">
                  {clinic.website}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Open Hours */}
      <section className="section">
        <h3>진료시간</h3>
        <div className="hours-info">
          <div className="hour-row">
            <Clock size={18} />
            <div>
              <div className="hour-label">평일</div>
              <div className="hour-value">{clinic.openHours.weekday}</div>
            </div>
          </div>
          <div className="hour-row">
            <Clock size={18} />
            <div>
              <div className="hour-label">토요일</div>
              <div className="hour-value">{clinic.openHours.saturday}</div>
            </div>
          </div>
          <div className="hour-row">
            <Clock size={18} />
            <div>
              <div className="hour-label">일요일</div>
              <div className="hour-value">{clinic.openHours.sunday}</div>
            </div>
          </div>
          {clinic.openHours.lunch && (
            <div className="hour-row">
              <Clock size={18} />
              <div>
                <div className="hour-label">점심시간</div>
                <div className="hour-value">{clinic.openHours.lunch}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Doctors */}
      <section className="section">
        <h3>의료진</h3>
        <div className="doctors-list">
          {clinic.doctors.map(doctor => (
            <div key={doctor.id} className="doctor-card">
              <div className="doctor-header">
                <div className="doctor-name">{doctor.name}</div>
                <span className="doctor-title">{doctor.title}</span>
              </div>
              <div className="doctor-specialties">
                {doctor.specialties.map(s => (
                  <span key={s} className="doctor-specialty" style={{ color: SPECIALTY_COLORS[s] }}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="doctor-info">
                <div>
                  <div className="info-label">학력</div>
                  <ul>
                    {doctor.education.map((edu, i) => (
                      <li key={i}>{edu}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="info-label">경력</div>
                  <ul>
                    {doctor.career.map((c, i) => (
                      <li key={i}>{c}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Prices */}
      <section className="section">
        <h3>진료비</h3>
        <div className="prices-list">
          {Array.from(new Set(clinic.prices.map(p => p.category))).map(category => (
            <div key={category} className="price-category">
              <h4>{category}</h4>
              <div className="price-items">
                {clinic.prices.filter(p => p.category === category).map((price, i) => (
                  <div key={i} className="price-row">
                    <div className="price-name">
                      <span>{price.name}</span>
                      {price.description && <span className="price-desc">{price.description}</span>}
                    </div>
                    <div className="price-value">{price.price}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="price-notice">
          진료비는 변동될 수 있으며, 건강보험 적용 여부에 따라 달라질 수 있습니다.
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <h3>리뷰</h3>
        {clinic.reviews.length === 0 ? (
          <p className="no-reviews">아직 리뷰가 없습니다</p>
        ) : (
          <div className="reviews-list">
            {clinic.reviews.map(review => (
              <div key={review.id} className="review-card">
                <div className="review-header">
                  <div className="review-author">{review.author}</div>
                  <div className="review-rating">
                    {[1, 2, 3, 4, 5].map(i => (
                      <Star
                        key={i}
                        size={14}
                        fill={i <= review.rating ? '#F59E0B' : '#ddd'}
                        color={i <= review.rating ? '#F59E0B' : '#ddd'}
                      />
                    ))}
                  </div>
                </div>
                <div className="review-specialty" style={{ color: SPECIALTY_COLORS[review.specialty] }}>
                  {review.specialty}
                </div>
                <p className="review-content">{review.content}</p>
                <div className="review-date">{review.date}</div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* CTA */}
      <div className="cta-section">
        <a href={`tel:${clinic.phone}`} className="btn btn-primary btn-lg">
          <Phone size={18} />
          전화 예약하기
        </a>
      </div>
    </div>
  )
}
