import './productscard.css'

export type ProductsCardProps = {
  title: string,
  price: number,
  image: string,
}
const ProductsCard = (product:ProductsCardProps) => {
  return (
    <article className="products__card">
            <img src={product.image} alt={product.title} className="products__img"/>

            <h3 className="products__title">{product.title}</h3>
            <span className="products__price">${product.price}</span>

            <button className="products__button">
                <i className='bx bx-shopping-bag'></i>
            </button>
        </article>
        )
}

export default ProductsCard