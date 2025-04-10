import './featurecard.css'

export type FeatureCardProps = {
  title: string,
  price: string,
  img: string,
}

{/*Egészítsd ki a komponenst a megfelelő props-ok használatával */}

const FeatureCard = () => {
  return (
    <div className="featured__card">
        <span className="featured__tag">Sale</span>
    
        <img src="" alt="" className="featured__img"/>
    
        <div className="featured__data">
            <h3 className="featured__title"></h3>
            <span className="featured__price"></span>
        </div>
    
        <button className="button featured__button">ADD TO CART</button>
    </div>
  )
}

export default FeatureCard