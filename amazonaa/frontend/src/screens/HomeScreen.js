import { Link } from "react-router-dom";
import data from "../data";

function HomeScreen() {
  return (
    <div>
      <h1>Featured products</h1>
      <div className="products">
        {data.products.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`product/${product.slug}`}>
              <img src={product.image} alt={product.name}></img>
            </Link>
            <div className="productInfo">
              <Link to={`product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>Rs.{product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomeScreen;
