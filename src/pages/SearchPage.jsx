import { useState, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, Filter } from 'lucide-react'
import { clinics, SPECIALTIES } from '../data/clinics'
import ClinicCard from '../components/ClinicCard'
import './SearchPage.css'

const CITIES = ['전체', '서울', '부산', '대구', '인천', '광주']
const PRICE_RANGES = ['전체', '저렴', '보통', '고가']

export default function SearchPage() {
  const [searchParams] = useSearchParams()
  const [query, setQuery] = useState('')
  const [selectedSpecialty, setSelectedSpecialty] = useState(searchParams.get('specialty') || '')
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedPrice, setSelectedPrice] = useState('')
  const [sortBy, setSortBy] = useState('평점순')
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState([])

  const filtered = useMemo(() => {
    let result = clinics

    if (query.trim()) {
      const q = query.trim().toLowerCase()
      result = result.filter(c =>
        c.name.toLowerCase().includes(q) ||
        c.address.toLowerCase().includes(q) ||
        c.specialties.some(s => s.toLowerCase().includes(q)) ||
        c.district.toLowerCase().includes(q)
      )
    }

    if (selectedSpecialty) {
      result = result.filter(c => c.specialties.includes(selectedSpecialty))
    }

    if (selectedCity) {
      result = result.filter(c => c.city === selectedCity)
    }

    if (selectedPrice) {
      result = result.filter(c => c.priceRange === selectedPrice)
    }

    return [...result].sort((a, b) => {
      if (sortBy === '평점순') return b.rating - a.rating
      if (sortBy === '리뷰순') return b.reviewCount - a.reviewCount
      return a.name.localeCompare(b.name)
    })
  }, [query, selectedSpecialty, selectedCity, selectedPrice, sortBy])

  const activeFilterCount = [selectedSpecialty, selectedCity, selectedPrice].filter(Boolean).length

  const toggleFavorite = (clinicId) => {
    setFavorites(prev =>
      prev.includes(clinicId)
        ? prev.filter(id => id !== clinicId)
        : [...prev, clinicId]
    )
  }

  return (
    <div className="search-page">
      {/* Search Header */}
      <div className="search-header">
        <div className="search-bar-container">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="한의원 이름, 지역, 특화분야"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            {query && (
              <button className="clear-btn" onClick={() => setQuery('')}>✕</button>
            )}
          </div>
          <button
            className={`filter-btn ${activeFilterCount > 0 ? 'active' : ''}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} />
            {activeFilterCount > 0 && <span className="filter-badge">{activeFilterCount}</span>}
          </button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="filter-panel">
            <div className="filter-group">
              <label>특화분야</label>
              <div className="filter-chips">
                <button
                  className={`chip ${!selectedSpecialty ? 'active' : ''}`}
                  onClick={() => setSelectedSpecialty('')}
                >
                  전체
                </button>
                {SPECIALTIES.map(s => (
                  <button
                    key={s}
                    className={`chip ${selectedSpecialty === s ? 'active' : ''}`}
                    onClick={() => setSelectedSpecialty(selectedSpecialty === s ? '' : s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>지역</label>
              <div className="filter-chips">
                {CITIES.map(city => (
                  <button
                    key={city}
                    className={`chip ${selectedCity === city ? 'active' : ''}`}
                    onClick={() => setSelectedCity(selectedCity === city ? '' : city)}
                  >
                    {city}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>가격대</label>
              <div className="filter-chips">
                {PRICE_RANGES.map(p => (
                  <button
                    key={p}
                    className={`chip ${selectedPrice === p ? 'active' : ''}`}
                    onClick={() => setSelectedPrice(selectedPrice === p ? '' : p)}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <label>정렬</label>
              <div className="filter-chips">
                {['평점순', '리뷰순', '이름순'].map(s => (
                  <button
                    key={s}
                    className={`chip ${sortBy === s ? 'active' : ''}`}
                    onClick={() => setSortBy(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {activeFilterCount > 0 && (
              <button className="reset-btn" onClick={() => {
                setSelectedSpecialty('')
                setSelectedCity('')
                setSelectedPrice('')
              }}>
                필터 초기화
              </button>
            )}
          </div>
        )}
      </div>

      {/* Results */}
      <div className="results">
        <div className="result-info">
          <p>총 <strong>{filtered.length}</strong>개의 한의원</p>
        </div>

        {filtered.length === 0 ? (
          <div className="empty-state">
            <p>검색 결과가 없습니다</p>
            <small>다른 검색어나 필터를 시도해보세요</small>
          </div>
        ) : (
          <div className="clinics-grid">
            {filtered.map(clinic => (
              <ClinicCard
                key={clinic.id}
                clinic={clinic}
                isFavorite={favorites.includes(clinic.id)}
                onToggleFavorite={toggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
