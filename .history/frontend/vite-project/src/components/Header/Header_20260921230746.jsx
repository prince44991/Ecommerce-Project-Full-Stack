import './Header.css'
import heroShoe from '../../assets/hero.png'

const Header = () => {
  return (
    <section className="header-section">
      <div className="header-shell">
        <div className="header-copy">
          <span className="eyebrow">New collection</span>

          <h1 className="header-title">
            Step into
            <span className="accent">performance</span>
          </h1>

          <p className="header-text">
            Explore premium sneakers built for comfort, speed, and everyday style.
            Designed to move with you from morning workouts to late-night plans.
          </p>

          <div className="header-actions">
            <button type="button" className="primary-btn">Shop now</button>
            <button type="button" className="secondary-btn">View lookbook</button>
          </div>

          <div className="header-meta">
            <div className="meta-item">
              <strong>4.9</strong>
              <span>Rated</span>
            </div>
            <div className="meta-item">
              <strong>12k+</strong>
              <span>Happy buyers</span>
            </div>
            <div className="meta-item">
              <strong>48h</strong>
              <span>Fast delivery</span>
            </div>
          </div>
        </div>

        <div className="product-visual" aria-label="Featured shoe product">
          <div className="product-card">
            <div className="product-blob" />

            <div className="floating-badge badge-top">
              <div className="badge-icon">★</div>
              <div className="badge-text">
                <strong>Best Seller</strong>
                <span>UltraBoost</span>
              </div>
            </div>

            <img src={heroShoe} alt="Premium sneaker" className="hero-shoe" />

            <div className="floating-badge badge-bottom">
              <div className="badge-icon">↗</div>
              <div className="badge-text">
                <strong>$189</strong>
                <span>Now trending</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
