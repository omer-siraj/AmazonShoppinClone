import React from 'react';
import LayOut from '../../Components/LayOut/LayOut';
import classes from './Payment.module.css';
import CurrencyFormat from '../../Components/CurrencyFormat/CurrencyFormat';
import { useContext } from 'react';
import { DataContext } from '../../Components/DataProvider/DataProvider';

const Payment = () => {
  const [{ basket }] = useContext(DataContext);

  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  return (
    <LayOut>
      <div className={classes.payment}>
        <h2>Payment Page</h2>
        {basket.length === 0 ? (
          <p>Your cart is empty. Add items before proceeding to payment.</p>
        ) : (
          <div>
            <p>Total Items: {basket.length}</p>
            <CurrencyFormat amount={total} />
            <button className={classes.payButton}>Proceed to Pay</button>
          </div>
        )}
      </div>
    </LayOut>
  );
};

export default Payment;
