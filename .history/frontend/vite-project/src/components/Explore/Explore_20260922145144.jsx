import React from 'react'
import './Explore.css'
import { Img } from '../../assets/Img.js'

const Explore = () => {
  return (
    <section className='explore-section' aria-labelledby='explore-title'>
      <div className='explore-heading'>
        <div>
          <span className='section-kicker'>Curated for you</span>
          <h2 id='explore-title'>Explore the edit.</h2>
        </div>
        <p className='explore-intro'>
          Fresh silhouettes, considered details, and everyday pairs made to
          move with you.
        </p>
        <a className='view-all' href='#collection'>
          View collection <span aria-hidden='true'>↗</span>
        </a>
      </div>

      <div className='explore-grid'>
        {Img.map((item, index) => (
          <article className={`explore-card explore-card-${index + 1}`} key={item.id}>
            <a className='explore-image-link' href={`#${item.text}-${item.id}`}>
              <span className='card-index'>0{index + 1}</span>
              <img src={item.image} alt={`${item.text} footwear collection`} />
              <span className='card-arrow' aria-hidden='true'>
                ↗
              </span>
            </a>
            <div className='explore-card-info'>
              <div>
                <span className='card-category'>New arrival</span>
                <h3>{item.text}</h3>
              </div>
              <span className='card-price'>Discover pair</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Explore
