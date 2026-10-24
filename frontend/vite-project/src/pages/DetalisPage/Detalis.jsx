import { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { StoreContext } from '../../context/StoreContext'
import './Detalis.css'

const Detalis = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const { cartItems, addCart, removecart } = useContext(StoreContext)
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    const fetchProduct = async () => {
      setLoading(true)
      setError('')
      setProduct(null)

      try {
        const response = await axios.get(`http://localhost:8001/view/product/${id}`)
        const item = response.data?.data

        if (!item) {
          throw new Error('Product details were not found.')
        }

        if (isActive) {
          setProduct(item)
        }
      } catch {
        if (isActive) {
          setError('We could not load this product. Please try again.')
        }
      } finally {
        if (isActive) {
          setLoading(false)
        }
      }
    }

    fetchProduct()

    return () => {
      isActive = false
    }
  }, [id])

  if (loading) {
    return (
      <main className="details-page">
        <div className="details-container">
          <div className="details-skeleton" role="status" aria-label="Loading product details">
            <div className="details-skeleton-image" />
            <div className="details-skeleton-copy">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </main>
    )
  }

  if (error || !product) {
    return (
      <main className="details-page">
        <div className="details-container">
          <section className="details-message" role="alert">
            <span className="details-message-icon" aria-hidden="true">
              <i className="bi bi-exclamation-circle" />
            </span>
            <h1>Product unavailable</h1>
            <p>{error || 'This product could not be found.'}</p>
            <button className="details-back-button" type="button" onClick={() => navigate(-1)}>
              <i className="bi bi-arrow-left" aria-hidden="true" />
              Go back
            </button>
          </section>
        </div>
      </main>
    )
  }

  const productId = product._id || product.id
  const quantity = cartItems?.[productId] || 0

  return (
    <main className="details-page">
      <div className="details-container">
        <nav className="details-breadcrumb" aria-label="Breadcrumb">
          <button type="button" onClick={() => navigate(-1)}>
            <i className="bi bi-arrow-left" aria-hidden="true" />
            Back to products
          </button>
          <span aria-hidden="true">/</span>
          <span>{product.catagory || 'Product'}</span>
        </nav>

        <section className="details-card">
          <div className="details-visual">
            <span className="details-image-label">
              <i className="bi bi-image" aria-hidden="true" />
              Product view
            </span>
            <img
              className="details-image"
              src={`http://localhost:8001/uploads/${product.image}`}
              alt={product.productname}
            />
            <div className="details-image-caption">
              <span>{product.catagory || 'Our collection'}</span>
              <i className="bi bi-stars" aria-hidden="true" />
            </div>
          </div>

          <div className="details-content">
            <div className="details-eyebrow">
              <span className="details-eyebrow-mark" />
              Discover something special
            </div>

            <h1 className="details-title">{product.productname}</h1>
            <p className="details-description">
              {product.description || 'A great choice from our collection.'}
            </p>

            <div className="details-divider" />

            <div className="details-price-row">
              <div>
                <span className="details-price-label">Price</span>
                <p className="details-price">₹{product.price}</p>
              </div>
              {product.catagory && (
                <span className="details-category">
                  <i className="bi bi-grid" aria-hidden="true" />
                  {product.catagory}
                </span>
              )}
            </div>

            <div className="details-actions">
              {quantity === 0 ? (
                <button
                  className="details-add-button"
                  type="button"
                  onClick={() => addCart(productId)}
                >
                  <i className="bi bi-bag-plus" aria-hidden="true" />
                  Add to cart
                  <i className="bi bi-arrow-right details-button-arrow" aria-hidden="true" />
                </button>
              ) : (
                <div className="details-quantity-control" aria-label="Cart quantity">
                  <button
                    type="button"
                    aria-label="Remove one from cart"
                    onClick={() => removecart(productId)}
                  >
                    <i className="bi bi-dash" aria-hidden="true" />
                  </button>
                  <span>{quantity} in cart</span>
                  <button
                    type="button"
                    aria-label="Add one to cart"
                    onClick={() => addCart(productId)}
                  >
                    <i className="bi bi-plus" aria-hidden="true" />
                  </button>
                </div>
              )}
              <button
                className="details-continue-button"
                type="button"
                onClick={() => navigate('/cart')}
              >
                View cart
              </button>
            </div>

            <div className="details-note">
              <span className="details-note-icon">
                <i className="bi bi-heart" aria-hidden="true" />
              </span>
              <span>Picked with care, just for you.</span>
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}

export default Detalis
