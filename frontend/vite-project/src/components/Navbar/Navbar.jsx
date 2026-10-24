import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { useState,useContext, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Navbar = ({setShowlogin}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [searchResults,setSearchResults] = useState([])
  const [searchFocused,setSearchFocused] = useState(false)
  const [searchLoading,setSearchLoading] = useState(false)
  const navigate = useNavigate()

 const {hello,setHello} = useContext(StoreContext)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setHello('')
    setMenuOpen(false)
  }



  useEffect(() => {
    const query = search.trim()

    if (!query) {
      setSearchResults([])
      setSearchLoading(false)
      return
    }

    const controller = new AbortController()
    const timeoutId = window.setTimeout(async () => {
      setSearchLoading(true)

      try {
        const response = await axios.get('http://localhost:8001/product/search', {
          params: { q: query },
          signal: controller.signal,
        })
        const results = Array.isArray(response.data) ? response.data : response.data?.data
        setSearchResults(Array.isArray(results) ? results : [])
      } catch (error) {
        if (!axios.isCancel(error)) {
          console.error('Could not search products:', error)
          setSearchResults([])
        }
      } finally {
        if (!controller.signal.aborted) {
          setSearchLoading(false)
        }
      }
    }, 250)

    return () => {
      window.clearTimeout(timeoutId)
      controller.abort()
    }
  }, [search])

  const openProduct = (product) => {
    const productId = product._id || product.id
    if (!productId) return

    navigate(`/detalis/${productId}`)
    setSearch('')
    setSearchResults([])
    setSearchFocused(false)
    setMenuOpen(false)
  }
    

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
            <div className="search-container">
              <form
                className="search-form"
                role="search"
                onSubmit={(event) => event.preventDefault()}
              >
                <i className="bi bi-search" aria-hidden="true" />
                <input
                  type="search"
                  aria-label="Search sneakers"
                  aria-controls="search-suggestions"
                  aria-expanded={searchFocused && search.trim().length > 0}
                  placeholder="Search sneakers"
                  value={search}
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {search && (
                  <button
                    className="search-clear"
                    type="button"
                    aria-label="Clear search"
                    onMouseDown={(event) => event.preventDefault()}
                    onClick={() => {
                      setSearch('')
                      setSearchFocused(true)
                    }}
                  >
                    <i className="bi bi-x-circle-fill" aria-hidden="true" />
                  </button>
                )}
              </form>

              {searchFocused && search.trim() && (
                <div className="search-suggestions" id="search-suggestions">
                  <div className="search-suggestions-heading">
                    <span>{searchLoading ? 'Searching' : 'Suggestions'}</span>
                    {!searchLoading && searchResults.length > 0 && (
                      <span className="search-result-count">{searchResults.length} found</span>
                    )}
                  </div>
                  {searchLoading ? (
                    <div className="search-suggestions-message" role="status">
                      <span className="search-loading-dot" />
                      Finding your next pair...
                    </div>
                  ) : searchResults.length > 0 ? (
                    <ul className="search-suggestions-list">
                      {searchResults.map((product) => (
                        <li key={product._id || product.id || product.productname}>
                          <button
                            className="search-result"
                            type="button"
                            onMouseDown={(event) => event.preventDefault()}
                            onClick={() => openProduct(product)}
                          >
                            <span className="search-result-image">
                              {product.image ? (
                                <img
                                  src={`http://localhost:8001/uploads/${product.image}`}
                                  alt=""
                                />
                              ) : (
                                <i className="bi bi-image" aria-hidden="true" />
                              )}
                            </span>
                            <span className="search-result-info">
                              <span className="search-result-name">{product.productname}</span>
                              <span className="search-result-category">
                                {product.catagory || 'Sneakers'}
                              </span>
                            </span>
                            <span className="search-result-price">₹{product.price}</span>
                            <i className="bi bi-arrow-up-right search-result-arrow" aria-hidden="true" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="search-suggestions-message">
                      <i className="bi bi-search" aria-hidden="true" />
                      No sneakers found for “{search.trim()}”
                    </div>
                  )}
                </div>
              )}
            </div>


            <button type="button" aria-label="View wishlist"><i className="bi bi-heart" aria-hidden="true" /></button>
            <Link to="/cart"><button className="cart-button" type="button" aria-label="View shopping bag">
              <i className="bi bi-bag" aria-hidden="true" />
              <span className="cart-count">0</span>
            </button>
            </Link>

            
              {!hello?<button type="button" onClick={() => setShowlogin(true)} className="signup-btn" aria-label="Create a new account">
                <i className="bi bi-person-plus" aria-hidden="true" />
                <span>Sign up</span>
              </button>:<div className="profile-menu">
                <button type="button" className="profile-button" aria-label="Profile menu" aria-haspopup="true">
                  <i className="bi bi-person-circle" aria-hidden="true" />
                </button>
                <div className="profile-dropdown">
                  <Link to="/PlaceOrder" onClick={() => setMenuOpen(false)}>
                    <i className="bi bi-box-seam" aria-hidden="true" />
                    <span>Orders</span>
                  </Link>
                  <button type="button" onClick={handleLogout}>
                    <i className="bi bi-box-arrow-right" aria-hidden="true" />
                    <span>Log out</span>
                  </button>
                </div>
              </div>}
            
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
