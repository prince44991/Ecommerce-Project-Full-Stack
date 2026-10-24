import { Link } from 'react-router-dom'
import './PaymentSuccess.css'

const confettiPieces = Array.from({ length: 28 }, (_, index) => index)

const PaymentSuccess = () => {
  return (
    <main className="payment-success-page">
      <div className="success-confetti" aria-hidden="true">
        {confettiPieces.map((piece) => (
          <span
            className="success-confetti-piece"
            key={piece}
            style={{
              '--confetti-x': `${(piece * 37) % 100}%`,
              '--confetti-delay': `${(piece % 7) * -0.35}s`,
              '--confetti-duration': `${3 + (piece % 5) * 0.4}s`,
            }}
          />
        ))}
      </div>

      <section className="payment-success-card" aria-labelledby="payment-success-title">
        <div className="success-visual" aria-hidden="true">
          <span className="success-orbit success-orbit-one" />
          <span className="success-orbit success-orbit-two" />
          <span className="success-checkmark">
            <svg viewBox="0 0 52 52" role="presentation">
              <path d="m14 27 8 8 17-18" />
            </svg>
          </span>
          <span className="success-spark success-spark-one">✦</span>
          <span className="success-spark success-spark-two">✧</span>
        </div>

        <p className="success-eyebrow">
          <span /> PAYMENT CONFIRMED
        </p>
        <h1 id="payment-success-title">You made a great choice!</h1>
        <p className="success-message">
          Your payment was successful. We&apos;re getting your order ready
          and will make sure it reaches you soon.
        </p>

        <div className="success-status">
          <span className="success-status-icon">
            <i className="bi bi-box-seam" aria-hidden="true" />
          </span>
          <span>
            <strong>Your order is in good hands</strong>
            <small>We&apos;ll keep you updated as it moves along.</small>
          </span>
          <i className="bi bi-arrow-right success-status-arrow" aria-hidden="true" />
        </div>

        <div className="success-actions">
          <Link className="success-primary-action" to="/">
            Continue shopping
            <i className="bi bi-arrow-up-right" aria-hidden="true" />
          </Link>
          <Link className="success-secondary-action" to="/ViewOrder">
            View my orders
          </Link>
        </div>

        <p className="success-thank-you">
          <i className="bi bi-heart-fill" aria-hidden="true" />
          Thanks for shopping with Sneakers
        </p>
      </section>
    </main>
  )
}

export default PaymentSuccess
