import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'
import './ViewOrder.css'

const formatPrice = (value) => {
  const price = Number(value)
  if (!Number.isFinite(price)) return '—'

  return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 2,
  }).format(price)
}

const formatDate = (value) => {
  if (!value) return 'Date unavailable'

  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return 'Date unavailable'

  return new Intl.DateTimeFormat('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
  }).format(date)
}

const formatAddress = (address) => {
  if (typeof address === 'string') return address
  if (!address || typeof address !== 'object') return ''

  return [
      address.firstName,
      address.lastName,
      address.street,
      address.city,
      address.state,
      address.zipCode,
      address.country,
  ].filter(Boolean).join(', ')
}

const ViewOrder = () => {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const { token, urls } = useContext(StoreContext)

  const callorderapi = async () => {
      setLoading(true)
      setError('')
      try {
          const response = await axios.post(
              `${urls}/order/userOrder`,
              {},
              { headers: { token: token } },
          )

          if (!Array.isArray(response.data?.data)) {
              throw new Error('Order data could not be loaded. Please try again.')
          }

          setOrders(response.data.data)
      } catch (error) {
          setError(
              error.response?.data?.message ||
              error.response?.data?.msg ||
              error.message ||
              'Something went wrong while loading your orders.',
          )
      } finally {
          setLoading(false)
      }
  }

  useEffect(() => {
      if (token) {
          callorderapi()
      } else {
          setLoading(false)
      }
  }, [token])

  return (
      <main className="view-orders-page">
          <header className="view-orders-heading">
              <span className="view-orders-eyebrow">YOUR ACCOUNT</span>
              <div className="view-orders-title-row">
                  <div>
                      <h1>Your orders</h1>
                      <p>Keep track of your purchases and order details.</p>
                  </div>
                  {!loading && !error && token && (
                      <span className="view-orders-count">
                          {orders.length} {orders.length === 1 ? 'order' : 'orders'}
                      </span>
                  )}
              </div>
          </header>

          {loading && (
              <section className="view-orders-state" aria-live="polite">
                  <span className="view-orders-spinner" aria-hidden="true" />
                  <h2>Loading your orders</h2>
                  <p>This will only take a moment.</p>
              </section>
          )}

          {!loading && !token && (
              <section className="view-orders-state">
                  <span className="view-orders-state-icon"><i className="bi bi-person-lock" aria-hidden="true" /></span>
                  <h2>Sign in to view your orders</h2>
                  <p>Your order history will be available here after you sign in.</p>
                  <Link className="view-orders-button" to="/">Continue shopping</Link>
              </section>
          )}

          {!loading && token && error && (
              <section className="view-orders-state view-orders-state-error" role="alert">
                  <span className="view-orders-state-icon"><i className="bi bi-exclamation-circle" aria-hidden="true" /></span>
                  <h2>We couldn’t load your orders</h2>
                  <p>{error}</p>
                  <button className="view-orders-button" type="button" onClick={callorderapi}>
                      Try again
                  </button>
              </section>
          )}

          {!loading && token && !error && orders.length === 0 && (
              <section className="view-orders-state">
                  <span className="view-orders-state-icon"><i className="bi bi-bag" aria-hidden="true" /></span>
                  <h2>No orders yet</h2>
                  <p>When you place an order, its items and updates will show up here.</p>
                  <Link className="view-orders-button" to="/">Explore the menu</Link>
              </section>
          )}

          {!loading && token && !error && orders.length > 0 && (
              <section className="view-orders-list" aria-label="Order history">
                  {orders.map((order, index) => {
                      const items = Array.isArray(order.items) ? order.items : []
                      const status = order.status || 'Order placed'
                      const address = formatAddress(order.address)

                      return (
                          <article className="view-order-card" key={order._id || index}>
                              <div className="view-order-card-top">
                                  <div className="view-order-card-heading">
                                      <span className="view-order-icon"><i className="bi bi-receipt" aria-hidden="true" /></span>
                                      <div>
                                          <span className="view-order-label">ORDER</span>
                                          <h2>{order._id ? `#${order._id.slice(-8).toUpperCase()}` : `#${index + 1}`}</h2>
                                      </div>
                                  </div>
                                  <span className="view-order-status">
                                      <span className="view-order-status-dot" />
                                      {status}
                                  </span>
                              </div>

                              <div className="view-order-meta">
                                  <span><i className="bi bi-calendar3" aria-hidden="true" /> {formatDate(order.createdAt || order.date)}</span>
                                  <span className={order.payment ? 'view-order-payment is-paid' : 'view-order-payment'}>
                                      <i className={`bi ${order.payment ? 'bi-check-circle' : 'bi-clock'}`} aria-hidden="true" />
                                      {order.payment ? 'Paid' : 'Payment pending'}
                                  </span>
                              </div>

                              <div className="view-order-items">
                                  {items.length > 0 ? items.map((item, itemIndex) => (
                                      <div className="view-order-item" key={item._id || `${item.productname || 'item'}-${itemIndex}`}>
                                          <span className="view-order-item-name">
                                              <i className="bi bi-dot" aria-hidden="true" />
                                              {item.productname || 'Food item'}
                                              <small>× {item.quantity || 1}</small>
                                          </span>
                                          <span className="view-order-item-price">{formatPrice(item.price)}</span>
                                      </div>
                                  )) : (
                                      <p className="view-order-no-items">Item details are unavailable for this order.</p>
                                  )}
                              </div>

                              <div className="view-order-card-bottom">
                                  {address && (
                                      <div className="view-order-delivery">
                                          <span className="view-order-label">DELIVER TO</span>
                                          <p><i className="bi bi-geo-alt" aria-hidden="true" /> {address}</p>
                                      </div>
                                  )}
                                  <div className="view-order-total">
                                      <span className="view-order-label">ORDER TOTAL</span>
                                      <strong>{formatPrice(order.amount)}</strong>
                                  </div>
                              </div>
                          </article>
                      )
                  })}
              </section>
          )}
      </main>
  )
}

export default ViewOrder
