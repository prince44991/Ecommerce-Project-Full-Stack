import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-white border-bottom shadow-sm'>
      <div className='container py-2'>
        <button
          className='btn btn-outline-secondary navbar-menu-button me-2'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#storeSidebar'
          aria-controls='storeSidebar'
          aria-label='Open menu'
        >
          <i className='bi bi-list fs-5'></i>
        </button>

        <a className='navbar-brand d-flex align-items-center gap-2' href='#home'>
          <img className='navbar-logo' src={logo} alt='Store logo' />
          <span className='fw-bold'>My Store</span>
        </a>

        <div className='navbar-collapse d-lg-flex' id='mainNavbar'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4 d-none d-lg-flex'>
            <li className='nav-item'><a className='nav-link active' href='#home'>Home</a></li>
            <li className='nav-item'><a className='nav-link' href='#shop'>Shop</a></li>
            <li className='nav-item'><a className='nav-link' href='#about'>About</a></li>
            <li className='nav-item'><a className='nav-link' href='#contact'>Contact</a></li>
          </ul>

          <form className='d-flex navbar-search my-3 my-lg-0 me-lg-3' role='search'>
            <input className='form-control' type='search' placeholder='Search products...' aria-label='Search products' />
            <button className='btn btn-dark ms-2' type='submit' aria-label='Search'>
              <i className='bi bi-search'></i><span className='d-none d-sm-inline ms-1'>Search</span>
            </button>
          </form>

          <div className='navbar-actions d-flex align-items-center gap-2'>
            <a className='btn btn-outline-secondary' href='#login'>
              <i className='bi bi-person me-1'></i>Login
            </a>
            <a className='btn btn-primary position-relative cart-button' href='#cart' aria-label='Shopping cart'>
              <i className='bi bi-cart3 me-1'></i><span className='d-none d-sm-inline'>Cart</span>
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>0</span>
            </a>
          </div>
        </div>
      </div>

      <aside className='offcanvas offcanvas-start' tabIndex='-1' id='storeSidebar' aria-labelledby='storeSidebarLabel'>
        <div className='offcanvas-header border-bottom'>
          <a className='d-flex align-items-center gap-2 text-decoration-none text-dark' href='#home'>
            <img className='navbar-logo' src={logo} alt='Store logo' />
            <span className='fw-bold' id='storeSidebarLabel'>My Store</span>
          </a>
          <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close menu'></button>
        </div>
        <div className='offcanvas-body'>
          <p className='text-uppercase text-secondary small fw-semibold'>Menu</p>
          <nav className='sidebar-links d-grid gap-2' aria-label='Sidebar navigation'>
            <a href='#home' data-bs-dismiss='offcanvas'><i className='bi bi-house me-2'></i>Home</a>
            <a href='#shop' data-bs-dismiss='offcanvas'><i className='bi bi-shop me-2'></i>Shop</a>
            <a href='#about' data-bs-dismiss='offcanvas'><i className='bi bi-info-circle me-2'></i>About</a>
            <a href='#contact' data-bs-dismiss='offcanvas'><i className='bi bi-envelope me-2'></i>Contact</a>
            <a href='#login' data-bs-dismiss='offcanvas'><i className='bi bi-person me-2'></i>Login</a>
            <a href='#cart' data-bs-dismiss='offcanvas'><i className='bi bi-cart3 me-2'></i>My Cart</a>
          </nav>
          <hr />
          <p className='text-uppercase text-secondary small fw-semibold'>Categories</p>
          <div className='d-grid gap-2'>
            <a className='sidebar-category' href='#new-arrivals' data-bs-dismiss='offcanvas'>New Arrivals</a>
            <a className='sidebar-category' href='#best-sellers' data-bs-dismiss='offcanvas'>Best Sellers</a>
            <a className='sidebar-category' href='#offers' data-bs-dismiss='offcanvas'>Special Offers</a>
          </div>
        </div>
      </aside>
    </nav>
  )
}

export default Navbar
