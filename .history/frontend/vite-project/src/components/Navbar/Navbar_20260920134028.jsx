import './Navbar.css'

const Navbar = () => {
  return (
    <>
      <nav className='soleva-navbar bg-white border-bottom' aria-label='Main navigation'>
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
            <span className='soleva-brand-mark' aria-hidden='true'>
              <i className='bi bi-footprints'></i>
            </span>
            <span className='soleva-brand-name'>SOLEVA</span>
          </a>

          <ul className='soleva-nav-links list-unstyled mb-0' aria-label='Product categories'>
            <li><a className='active' href='#home'>Home</a></li>
            <li><a href='#men'>Men</a></li>
            <li><a href='#women'>Women</a></li>
            <li><a href='#kids'>Kids</a></li>
            <li><a href='#new-arrivals'>New Arrivals</a></li>
            <li><a className='soleva-offer-link' href='#offers'>Offers</a></li>
          </ul>

          <form className='soleva-search' role='search'>
            <i className='bi bi-search' aria-hidden='true'></i>
            <input type='search' placeholder='Search shoes, brands & styles...' aria-label='Search shoes, brands and styles' />
            <button type='submit' aria-label='Search'>Search</button>
          </form>

          <div className='soleva-actions'>
            <a className='soleva-action-link soleva-mobile-search' href='#search' aria-label='Search'>
              <i className='bi bi-search'></i>
            </a>
            <a className='soleva-action-link soleva-desktop-action' href='#wishlist' aria-label='Wishlist'>
              <i className='bi bi-heart'></i>
            </a>
            <a className='soleva-action-link soleva-login' href='#login' aria-label='Login'>
              <i className='bi bi-person'></i><span>Login</span>
            </a>
            <a className='soleva-cart' href='#cart' aria-label='Shopping cart with 2 items'>
              <i className='bi bi-bag'></i><span className='soleva-cart-label'>Cart</span>
              <span className='soleva-cart-count'>2</span>
            </a>
          </div>
        </div>
      </nav>

      <aside className='offcanvas offcanvas-start soleva-sidebar' tabIndex='-1' id='solevaSidebar' aria-labelledby='solevaSidebarTitle'>
        <div className='offcanvas-header soleva-sidebar-header'>
          <a className='soleva-brand' href='#home'>
            <span className='soleva-brand-mark' aria-hidden='true'><i className='bi bi-footprints'></i></span>
            <span className='soleva-brand-name' id='solevaSidebarTitle'>SOLEVA</span>
          </a>
          <button type='button' className='btn-close btn-close-white' data-bs-dismiss='offcanvas' aria-label='Close navigation'></button>
        </div>
        <div className='offcanvas-body soleva-sidebar-body'>
          <p className='soleva-sidebar-label'>Explore Soleva</p>
          <nav className='soleva-sidebar-links' aria-label='Sidebar navigation'>
            <a className='active' href='#home' data-bs-dismiss='offcanvas'><i className='bi bi-house'></i>Home</a>
            <a href='#men' data-bs-dismiss='offcanvas'><i className='bi bi-person-standing'></i>Men</a>
            <a href='#women' data-bs-dismiss='offcanvas'><i className='bi bi-person-standing-dress'></i>Women</a>
            <a href='#kids' data-bs-dismiss='offcanvas'><i className='bi bi-people'></i>Kids</a>
            <a href='#new-arrivals' data-bs-dismiss='offcanvas'><i className='bi bi-stars'></i>New Arrivals</a>
            <a href='#offers' data-bs-dismiss='offcanvas'><i className='bi bi-tag'></i>Offers</a>
          </nav>
          <div className='soleva-sidebar-promo'>
            <span>Step into something new</span>
            <a href='#new-arrivals' data-bs-dismiss='offcanvas'>Shop the latest <i className='bi bi-arrow-right'></i></a>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Navbar
