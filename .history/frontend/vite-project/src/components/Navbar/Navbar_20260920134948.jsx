import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='soleva-navbar navbar navbar-expand-lg bg-white border-bottom' aria-label='Main navigation'>
        <div className='container-fluid soleva-navbar-inner'>
          <button
            className='btn soleva-menu-button'
            type='button'
            data-bs-toggle='offcanvas'
            data-bs-target='#solevaSidebar'
            aria-controls='solevaSidebar'
            aria-label='Open navigation menu'
          >
            <i className='bi bi-list'></i>
          </button>

          <a className='soleva-brand' href='#home' aria-label='Soleva home'>
            <span className='soleva-brand-mark' aria-hidden='true'><i className='bi bi-footprints'></i></span>
            <span className='soleva-brand-name'>SOLEVA</span>
          </a>

          <ul className='soleva-nav-links navbar-nav mb-0' aria-label='Store categories'>
            <li className='nav-item'><a className='nav-link active' href='#home'>Home</a></li>
            <li className='nav-item'><a className='nav-link' href='#men'>Men</a></li>
            <li className='nav-item'><a className='nav-link' href='#women'>Women</a></li>
            <li className='nav-item'><a className='nav-link' href='#kids'>Kids</a></li>
            <li className='nav-item'><a className='nav-link' href='#new-arrivals'>New Arrivals</a></li>
            <li className='nav-item'><a className='nav-link offer-link' href='#offers'>Offers</a></li>
          </ul>

          <form className='soleva-search' role='search'>
            <i className='bi bi-search' aria-hidden='true'></i>
            <input type='search' placeholder='Search shoes, brands & styles...' aria-label='Search shoes, brands and styles' />
          </form>

          <div className='soleva-actions'>
            <a className='soleva-action-link mobile-search' href='#search' aria-label='Search'><i className='bi bi-search'></i></a>
            <a className='soleva-action-link desktop-action' href='#wishlist' aria-label='Wishlist'><i className='bi bi-heart'></i></a>
            <a className='soleva-action-link login-link' href='#login'><i className='bi bi-person'></i><span>Login</span></a>
            <a className='soleva-cart' href='#cart' aria-label='Shopping cart, 0 items'>
              <i className='bi bi-bag'></i><span className='cart-label'>Cart</span><span className='cart-count'>0</span>
            </a>
          </div>
        </div>
      </nav>

      <aside className='offcanvas offcanvas-start soleva-sidebar' tabIndex='-1' id='solevaSidebar' aria-labelledby='solevaSidebarTitle'>
        <div className='offcanvas-header sidebar-header'>
          <a className='soleva-brand sidebar-brand' href='#home'>
            <span className='soleva-brand-mark' aria-hidden='true'><i className='bi bi-footprints'></i></span>
            <span className='soleva-brand-name' id='solevaSidebarTitle'>SOLEVA</span>
          </a>
          <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas' aria-label='Close menu'></button>
        </div>
        <div className='offcanvas-body sidebar-body'>
          <p className='sidebar-label'>Shop Soleva</p>
          <nav className='sidebar-links' aria-label='Mobile navigation'>
            <a className='active' href='#home' data-bs-dismiss='offcanvas'><i className='bi bi-house'></i>Home</a>
            <a href='#men' data-bs-dismiss='offcanvas'><i className='bi bi-person'></i>Men</a>
            <a href='#women' data-bs-dismiss='offcanvas'><i className='bi bi-person-standing-dress'></i>Women</a>
            <a href='#kids' data-bs-dismiss='offcanvas'><i className='bi bi-people'></i>Kids</a>
            <a href='#new-arrivals' data-bs-dismiss='offcanvas'><i className='bi bi-stars'></i>New Arrivals</a>
            <a href='#offers' data-bs-dismiss='offcanvas'><i className='bi bi-tag'></i>Offers</a>
            <a href='#login' data-bs-dismiss='offcanvas'><i className='bi bi-person-circle'></i>Login</a>
            <a href='#cart' data-bs-dismiss='offcanvas'><i className='bi bi-bag'></i>My Cart</a>
          </nav>
          <div className='sidebar-promo'>
            <strong>Find your perfect pair</strong>
            <a href='#new-arrivals' data-bs-dismiss='offcanvas'>Explore new arrivals <i className='bi bi-arrow-right'></i></a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar
