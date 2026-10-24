import './Navbar.css'
import logo from '../../assets/logo.jpg'
import { useState,useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import axios from 'axios'

const Navbar = ({setShowlogin}) => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [SearchTerm,setSearchTerm] = useState([])
  

 const {hello,setHello} = useContext(StoreContext)

  const handleLogout = () => {
    localStorage.removeItem('token')
    setHello('')
    setMenuOpen(false)
  }



  const handSearchcall = async () => {

    try {
      if(search.trim === ""){
        setSearchTerm([])
        return
      }

      const response = await axios.get(`http://localhost:8001/product/search?q=${search}`)
      console.log("data backend query:",response.data)
      setSearchTerm(response.data)
      
    } catch (error) {
      console.log(error)
    }

    
    }


    useEffect(() => {
      handSearchcall()
    },[search])
    

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
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

        

            </form>

            {SearchTerm.map((r) => {
              return(
                <div>
                  <h2>{r.productname}</h2>
                  </div>
              )
            })}


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
