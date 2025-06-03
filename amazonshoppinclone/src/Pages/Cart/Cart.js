import React, { useContext } from 'react';
import LayOut from '../../Components/LayOut/LayOut'; // ✅ corrected import
import { DataContext } from '../../Components/DataProvider/DataProvider';
import ProductCard from '../../Components/Product/ProductCard';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from './Cart.module.css';
import { Type } from '../../Utility/action.type';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

const Cart = () => {
  const [{ basket, user }, dispatch] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const increament = (item) => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item,
    });
  };

  const decreament = (id) => {
    dispatch({
      type: Type.REMOVE_FROM_BASKET,
      id,
    });
  };

  return (
    <LayOut>
      <section className={classes.container}>
        <div className={classes.cart__container}>
          <h2>Hello</h2>
          <h2>Your shopping basket</h2>
          <hr />
          {basket?.length === 0 ? (
            <p>Opps! No item in your cart</p>
          ) : (
            basket.map((item, i) => (
              <section className={classes.cart__product} key={i}>
                <ProductCard
                  product={item}
                  renderDesc={true}
                  renderAdd={false}
                  flex={true}
                />
                <div className={classes.btn__container}>
                  <button
                    className={classes.btn}
                    onClick={() => increament(item)}
                  >
                    <IoIosArrowUp size={20} />
                  </button>
                  <span>{item.amount}</span>
                  <button
                    className={classes.btn}
                    onClick={() => decreament(item.id)}
                  >
                    <IoIosArrowDown size={20} />
                  </button>
                </div>
              </section>
            ))
          )}
        </div>

        {basket?.length !== 0 && (
          <div>
            <div className={classes.subtotal}>
              <p>Subtotal ({basket?.length} item{basket.length > 1 ? 's' : ''})</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type='checkbox' />
              <small>This order contains a gift</small>
            </span>
            <Link to='/payments'>Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
};

export default Cart;
