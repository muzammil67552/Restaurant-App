import { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

    return (
        <div className="cart">
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {food_list.map((item, index) => {
                    if (cartItems[item._id] > 0) {
                        return (
                            <div className="cart-items-title cart-items-item" key={index}>
                                <img src={item.image} alt="" />
                                <p>{item.name}</p>
                                <p>OR{item.price}</p>
                                <p>{cartItems[item._id]}</p>
                                <p>OR{item.price * cartItems[item._id]}</p>
                                <button onClick={() => removeFromCart(item._id)}>X</button>
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
            {/* Total Of The Product */}
            <div className='cart-bottom'>
                <div className='cart-total'>
                    <h2>Total Cart</h2>
                     <div>
                               <div className='cart-total-details'>
                                  <p>Subtotal</p>
                                  <b>{0}</b>
                               </div>

                         <hr/>
                               <div className='cart-total-details'>
                                 <p>Delivery Fee</p>
                                 <b>{2}</b>

                               </div>
                         <hr/>
                               <div className='cart-total-details'>
                                   <p>Total</p>
                                   <b>{0}</b>
                               </div>
                     </div>
                </div>
                <button>PROCEED TO CHECKOUT</button>
            </div>
            {/* Promo Code */}
            <div className='card-promocode'>
                <p>If YOu Have A Promo Code Please, Enter here</p>
                <div className='cart-promo-input'>
                     <input type='text' placeholder='promo code'/>
                     <button>Submit</button>
                </div>
            </div>
        </div>

    );
};

export default Cart;
