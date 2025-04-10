import './featurecard.css'

export type FeatureCardProps = {
  title: string,
  price: string,
  image: string,
}

const FeatureCard = ({ title, price, image }: FeatureCardProps) => {
  return (
    <div className="featured__card">
        <span className="featured__tag">Sale</span>
    
        <img src={image} alt={title} className="featured__img"/>
    
        <div className="featured__data">
            <h3 className="featured__title">{title}</h3>
            <span className="featured__price">${price}</span>
        </div>
    
        <button className="button featured__button">ADD TO CART</button>
    </div>
  )
}

export default FeatureCard
