import React from 'react'
import './Explore.css'
import { Img } from '../../assets/Img.js'

const Explore = () => {
  return (
    <section className='explore-section' aria-labelledby='explore-title'>
      <div className='explore-heading'>
        <div>
          <span className='section-kicker'>Curated for movement</span>
          <h2 id='explore-title'>Explore the edit</h2>
        </div>
        <p className='explore-intro'>
          Everyday icons and bold new silhouettes, selected for the way you move.
        </p>
        <a className='view-all' href='#collection'>
          View collection <span aria-hidden='true'>↗</span>
        </a>
      </div>

      <div className='explore-grid' id='collection'>
        {Img.map((item, index) => (
          <article className={`explore-card explore-card-${index + 1}`} key={item.id}>
            <a className='explore-image-link' href='#collection' aria-label={`View ${item.text} shoes`}>
              <span className='card-index'>0{index + 1}</span>
              <img src={item.image} alt={`${item.text} shoes`} />
              <span className='card-arrow' aria-hidden='true'>↗</span>
            </a>
            <div className='explore-card-info'>
              <div>
                <span className='card-category'>{index % 2 === 0 ? 'Performance' : 'Lifestyle'}</span>
                <h3>{item.text}</h3>
              </div>
              <span className='card-price'>From $120</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Explore
