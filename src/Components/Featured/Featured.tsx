
import { useState } from 'react'
import './featured.css'

import FeatureCard, { FeatureCardProps } from './featuredCard/FeatureCard'




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
            {featured.map((item, index) => (
                <FeatureCard key={index} title={item.title} price={item.price} image={item.image} />
            ))}
    </div>
</section>
  )
}

export default Featured