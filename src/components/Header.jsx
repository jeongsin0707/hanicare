import { Link } from 'react-router-dom'
import { Heart, Search } from 'lucide-react'
import './Header.css'

export default function Header({ favoritesCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text" style={{fontSize: '20px', fontWeight: 'bold'}}>한나라한</span>
        </Link>
        
        <nav className="nav">
          <Link to="/" className="nav-link">홈</Link>
          <Link to="/search" className="nav-link">검색</Link>
          <Link to="/search?tab=favorites" className="nav-link favorites-link">
            <Heart size={18} />
            <span>즐겨찾기</span>
            {favoritesCount > 0 && <span className="badge-count">{favoritesCount}</span>}
          </Link>
        </nav>
      </div>
    </header>
  )
}
