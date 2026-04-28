import { Link } from 'react-router-dom'
import { Heart, MapPin, Star } from 'lucide-react'
import { SPECIALTY_COLORS } from '../data/clinics'
import './ClinicCard.css'

export default function ClinicCard({ clinic, isFavorite, onToggleFavorite }) {
  return (
    <div className="clinic-card card">
      <div className="card-header">
        <div className="card-title-row">
          <Link to={`/clinic/${clinic.id}`} className="clinic-name">
            {clinic.name}
          </Link>
          <button
            className="favorite-btn"
            onClick={() => onToggleFavorite(clinic.id)}
            title={isFavorite ? '즐겨찾기 제거' : '즐겨찾기 추가'}
          >
            <Heart size={20} fill={isFavorite ? 'currentColor' : 'none'} color={isFavorite ? '#EF4444' : '#ccc'} />
          </button>
        </div>
        <div className="clinic-meta">
          <MapPin size={14} />
          <span>{clinic.district}</span>
        </div>
      </div>

      <div className="specialties">
        {clinic.specialties.slice(0, 3).map(s => (
          <span key={s} className="specialty-tag" style={{ backgroundColor: SPECIALTY_COLORS[s] + '22', color: SPECIALTY_COLORS[s] }}>
            {s}
          </span>
        ))}
        {clinic.specialties.length > 3 && (
          <span className="specialty-tag more">+{clinic.specialties.length - 3}</span>
        )}
      </div>

      <div className="card-footer">
        <div className="rating-row">
          <Star size={14} fill="#F59E0B" color="#F59E0B" />
          <span className="rating-value">{clinic.rating.toFixed(1)}</span>
          <span className="review-count">({clinic.reviewCount})</span>
        </div>
        <span className="price-range" data-range={clinic.priceRange}>
          {clinic.priceRange}
        </span>
      </div>
    </div>
  )
}
