import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { useState } from 'react'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <header className="site-header">
      <nav className="navbar-shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label="Sneakers home">
          <span className="brand-mark">
            <img src={logo} alt="Sneakers logo" />
          </span>
          <span className="brand-name">SNEAKERS</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <i className={`bi ${menuOpen ? 'bi-x-lg' : 'bi-list'}`} aria-hidden="true" />
        </button>

        <div className={`nav-content ${menuOpen ? 'is-open' : ''}`}>
          <div className="nav-links">
            <a className="active" href="#home" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#shop" onClick={() => setMenuOpen(false)}>Shop</a>
            <a href="#collections" onClick={() => setMenuOpen(false)}>Collections</a>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
             
          </div>

          <div className="nav-actions">
            <form className="search-form" role="search" onSubmit={(event) => event.preventDefault()}>
              <i className="bi bi-search" aria-hidden="true" />
              <input
                type="search"
                aria-label="Search sneakers"
                placeholder="Search sneakers"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </form>
            <button type="button" aria-label="View wishlist"><i className="bi bi-heart" aria-hidden="true" /></button>
            <button className="cart-button" type="button" aria-label="View shopping bag">
              <i className="bi bi-bag" aria-hidden="true" />
              <span className="cart-count">0</span>
            </button>

            <button type="button" className="signup-btn" aria-label="Create a new account">
              <i className="bi bi-person-plus" aria-hidden="true" />
              <span>Sign up</span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
