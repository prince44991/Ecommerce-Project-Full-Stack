import './Navbar.css'
import logo from '../../assets/logo.jpg'

const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg bg-white border-bottom shadow-sm'>
      <div className='container py-2'>
        <a className='navbar-brand d-flex align-items-center gap-2' href='#home'>
          <img className='navbar-logo' src={logo} alt='Store logo' />
          <span className='fw-bold'>My Store</span>
        </a>

        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#mainNavbar'
          aria-controls='mainNavbar'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='mainNavbar'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4'>
            <li className='nav-item'><a className='nav-link active' href='#home'>Home</a></li>
            <li className='nav-item'><a className='nav-link' href='#shop'>Shop</a></li>
            <li className='nav-item'><a className='nav-link' href='#about'>About</a></li>
            <li className='nav-item'><a className='nav-link' href='#contact'>Contact</a></li>
          </ul>

          <form className='d-flex navbar-search my-3 my-lg-0 me-lg-3' role='search'>
            <input className='form-control' type='search' placeholder='Search products...' aria-label='Search products' />
            <button className='btn btn-dark ms-2' type='submit'>Search</button>
          </form>

          <div className='navbar-actions d-flex align-items-center gap-2'>
            <a className='btn btn-outline-secondary' href='#account'>Account</a>
            <a className='btn btn-primary position-relative cart-button' href='#cart' aria-label='Shopping cart'>
              Cart
              <span className='position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger'>0</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
  
}

export default Navbar
