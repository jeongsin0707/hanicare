import { Link } from 'react-router-dom'
import { Search, Stethoscope } from 'lucide-react'
import { clinics, SPECIALTIES, SPECIALTY_COLORS, SPECIALTY_IMAGES } from '../data/clinics'
import ClinicCard from '../components/ClinicCard'
import './HomePage.css'

export default function HomePage() {
  const topRatedClinics = [...clinics].sort((a, b) => b.rating - a.rating).slice(0, 4)

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>한의하니와 함께 나에게 맞는 한의원을 찾아보세요</h1>
          <p>전국 한의원의 전문 특화분야, 의료인 정보, 가격을 한눈에 비교하고 예약하세요</p>
          <Link to="/search" className="btn btn-primary btn-lg">
            <Search size={18} />
            한의원 검색하기
          </Link>
        </div>
      </section>

      {/* Specialties Section */}
      <section className="specialties-section">
        <h2>특화분야별 탐색</h2>
        <div className="specialties-grid">
          {SPECIALTIES.map(specialty => (
            <Link key={specialty} to={`/search?specialty=${specialty}`} className="specialty-card">
              <div className="specialty-image-container" style={{ backgroundImage: `url(${SPECIALTY_IMAGES[specialty]})` }}>
                <div className="specialty-overlay" style={{ backgroundColor: SPECIALTY_COLORS[specialty] }}></div>
              </div>
              <span>{specialty}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Top Rated Section */}
      <section className="top-rated-section">
        <div className="section-header">
          <h2>⭐ 평점 높은 한의원</h2>
          <Link to="/search" className="see-all">전체보기 →</Link>
        </div>
        <div className="clinics-list">
          {topRatedClinics.map(clinic => (
            <ClinicCard
              key={clinic.id}
              clinic={clinic}
              isFavorite={false}
              onToggleFavorite={() => {}}
            />
          ))}
        </div>
      </section>

      {/* Info Banner */}
      <section className="info-banner">
        <div className="banner-content">
          <h3>💡 한의원 선택 팁</h3>
          <ul>
            <li>특화분야로 검색하여 전문 한의원을 찾아보세요</li>
            <li>평점과 리뷰를 참고하여 신뢰할 수 있는 한의원을 선택하세요</li>
            <li>진료 전 반드시 한의원에 연락하여 예약 여부를 확인하세요</li>
          </ul>
        </div>
      </section>
    </div>
  )
}
