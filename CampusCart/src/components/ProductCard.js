import './ProductCard.css';
import elearningImage from '../assets/elearning.png';

function ProductCard({ title, price, image }) {
  return (
    <div className="product-card">
      <img src={elearningImage} alt="elearning" className="your-class" />
      <h3>{title}</h3>
      <div className="product-info">
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
