
import { useState } from 'react'
import './products.css'

import ProductsCard, { ProductsCardProps } from './ProductsCard/ProductsCard'

const Products = () => {
  const [products, setProducts] = useState<ProductsCardProps[]>([])
  fetch('/products.json')
    .then((response) => response.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error('Error fetching data:', error))
  return (
    <section className="products container" id="products">
    <h2 className="section__title">
        Products
    </h2>

    <div className="products__container">
      {
        products.map((item, index) => (
            <ProductsCard key={index} title={item.title} price={item.price} image={item.image} />
        ))
      }
    </div>
</section>
  )
}

export default Products