import { Link } from 'react-router-dom'
import { Heart, Search } from 'lucide-react'
import './Header.css'

export default function Header({ favoritesCount }) {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">한</span>
          <span className="logo-text">한의하니 <span style={{fontSize: '12px', color: 'rgba(255,255,255,0.8)'}}>한나라한</span></span>
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
