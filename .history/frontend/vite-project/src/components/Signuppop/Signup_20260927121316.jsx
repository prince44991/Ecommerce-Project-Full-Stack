import { useState } from 'react'
import './Signup.css'

const Signup = ({setShowlogin}) => {
  const [currentState, setCurrentState] = useState('SignUp')
  const isSignUp = currentState === 'SignUp'

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className="signup-overlay" onClick={() => setShowlogin(false)}>
      <section
        className="signup-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="signup-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="signup-side-panel">
          <span className="signup-side-mark"><i className="bi bi-lightning-charge-fill" aria-hidden="true" /></span>
          <p className="signup-eyebrow">THE SNEAKERS CLUB</p>
          <h2>Find your<br />next favorite.</h2>
          <p className="signup-side-copy">Fresh drops, member-only access, and a little more room to move.</p>
          <span className="signup-side-index">01 / 03</span>
        </div>

        <div className="signup-form-panel">
          <button
            className="signup-close"
            type="button"
            aria-label="Close sign up"
            onClick={() => setShowlogin(false)}
          >
            <i className="bi bi-x-lg" aria-hidden="true" />
          </button>

          <p className="signup-eyebrow signup-form-eyebrow">YOUR ACCOUNT</p>
          <h1 id="signup-title">{isSignUp ? 'Create account' : 'Welcome back'}</h1>
          <p className="signup-intro">
            {isSignUp ? 'Join the club. Your next pair starts here.' : 'Sign in to pick up where you left off.'}
          </p>

          <form className="signup-form" onSubmit={handleSubmit}>
            {isSignUp && (
              <label className="signup-field">
                <span>Full name</span>
                <input name="name" type="text" placeholder="Alex Morgan" autoComplete="name" required />
              </label>
            )}
            <label className="signup-field">
              <span>Email address</span>
              <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
            </label>
            <label className="signup-field">
              <span>Password</span>
              <input
                name="password"
                type="password"
                placeholder="At least 8 characters"
                autoComplete={isSignUp ? 'new-password' : 'current-password'}
                minLength={8}
                required
              />
            </label>

            {isSignUp && (
              <label className="signup-terms">
                <input type="checkbox" required />
                <span>I agree to the <a href="#terms">Terms</a> and <a href="#privacy">Privacy Policy</a>.</span>
              </label>
            )}

            <button className="signup-submit" type="submit">
              <span>{isSignUp ? 'Create account' : 'Sign in'}</span>
              <i className="bi bi-arrow-up-right" aria-hidden="true" />
            </button>
          </form>

          <p className="signup-switch">
            {isSignUp ? 'Already a member?' : 'New to Sneakers?'}{' '}
            <button type="button" onClick={() => setCurrentState(isSignUp ? 'Login' : 'SignUp')}>
              {isSignUp ? 'Sign in' : 'Create an account'}
            </button>
          </p>
          <p className="signup-secure"><i className="bi bi-shield-check" aria-hidden="true" /> Your details stay private and secure.</p>
        </div>
      </section>
    </div>
  )
}

export default Signup
