
import { useState } from 'react'
import './featured.css'

import FeatureCard, { FeatureCardProps } from './featuredCard/FeatureCard'


{/* Állítsd be a featured.css-ben, hogy az órák 992px szélesség alatt egymás alá kerüljenek a fölött pedig egymás mellé */}


const Featured = () => {
  const [featured, setFeatured] = useState<FeatureCardProps[]>([])
  fetch('/featured.json')
    .then((response) => response.json())
    .then((data) => setFeatured(data))
    .catch((error) => console.error('Error fetching data:', error))


  return (
    <section className="featured" id="featured">
    <h2 className="feature__title">Featured</h2>
    <div className="featured__container">
            {/* feauterd watches */}
            {featured.map((item, index) => (
                <FeatureCard key={index} title={item.title} price={item.price} image={item.image} />
            ))}
    </div>
</section>
  )
}

export default Featured