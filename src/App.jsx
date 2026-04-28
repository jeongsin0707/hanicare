import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import ClinicDetailPage from './pages/ClinicDetailPage'

function App() {
  const [favorites, setFavorites] = useState([])

  const toggleFavorite = (clinicId) => {
    setFavorites(prev =>
      prev.includes(clinicId)
        ? prev.filter(id => id !== clinicId)
        : [...prev, clinicId]
    )
  }

  return (
    <Router>
      <div className="app">
        <Header favoritesCount={favorites.length} />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/clinic/:id" element={<ClinicDetailPage favorites={favorites} toggleFavorite={toggleFavorite} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
