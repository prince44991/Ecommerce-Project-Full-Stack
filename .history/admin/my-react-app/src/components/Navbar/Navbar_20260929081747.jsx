import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {
  const [activePage, setActivePage] = useState('Dashboard')
  const [menuOpen, setMenuOpen] = useState(false)

  const navigation = ['Dashboard', 'Add food', 'Food list', 'Orders']

  return (
    <header className="admin-header">
      <div className="admin-header__main">
        <a className="admin-brand" href="#dashboard" aria-label="Savor admin home">
          <span className="admin-brand__mark" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path d="M16 27c-6.2 0-10-4.2-10-9.7C6 11.6 10.5 6 19.5 5c-.2 5.6-2.7 8.3-6.8 10.2 3.4-1.1 7-3.7 9.2-7.4C27.7 14 24.8 27 16 27Z" fill="currentColor" />
              <path d="M9 23c3.2-4.2 6.1-6.3 10.8-8.4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </span>
          <span className="admin-brand__name">savor<span>.</span></span>
          <span className="admin-brand__label">ADMIN</span>
        </a>

        <div className="admin-header__tools">
          <label className="admin-search">
            <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <circle cx="8.8" cy="8.8" r="5.8" stroke="currentColor" strokeWidth="1.6" />
              <path d="m13.2 13.2 3.3 3.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
            <input type="search" placeholder="Search menu, orders..." aria-label="Search menu and orders" />
            <kbd>⌘ K</kbd>
          </label>

          <button className="admin-icon-button" type="button" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="admin-notification-dot" />
          </button>

          <button className="admin-profile" type="button" aria-label="Account: Jordan Davis">
            <span className="admin-profile__avatar">JD</span>
            <span className="admin-profile__details">
              <strong>Jordan Davis</strong>
              <small>Store owner</small>
            </span>
            <svg className="admin-profile__chevron" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            className="admin-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className={`admin-nav${menuOpen ? ' admin-nav--open' : ''}`} aria-label="Main navigation">
        <div className="admin-nav__links">
          {navigation.map((page) => (
            <a
              className={`admin-nav__link${activePage === page ? ' admin-nav__link--active' : ''}`}
              href={`#${page.toLowerCase().replaceAll(' ', '-')}`}
              key={page}
              aria-current={activePage === page ? 'page' : undefined}
              onClick={() => {
                setActivePage(page)
                setMenuOpen(false)
              }}
            >
              {page}
              {page === 'Orders' && <span className="admin-nav__count">4</span>}
            </a>
          ))}
        </div>
        <div className="admin-store-status">
          <span className="admin-store-status__dot" />
          Store is live
        </div>
      </nav>
    </header>
  )
}

export default Navbar
