import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import './Cart.css';

function Cart() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item, i) => (
              <div className="cart-item" key={i}>
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>${item.price}</p>
                  <input
                    type="number"
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))}
          </div>

          <div className="cart-total">
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
