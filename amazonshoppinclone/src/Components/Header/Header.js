import React, { useContext } from 'react';
import classes from './Header.module.css';
import { Link } from 'react-router-dom';
import { BsSearch } from 'react-icons/bs';
import { MdLocationOn } from 'react-icons/md';
import { BiCart } from 'react-icons/bi';
import LowerHeader from './LowerHeader';
import { DataContext } from '../DataProvider/DataProvider';

const Header = () => {
  const context = useContext(DataContext);
  const [{ basket } = { basket: [] }] = context || [];

  const totalItem = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <section className={classes.fixed}>
      <header className={classes.header__container}>
        {/* Logo and Delivery */}
        <div className={classes.logo__container}>
          <Link to='/'>
            <img
              src='https://pngimg.com/uploads/amazon/amazon_PNG11.png'
              alt='amazon logo'
            />
          </Link>
          <div className={classes.delivery}>
            <MdLocationOn size={20} />
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className={classes.search}>
          <select>
            <option value='all'>All</option>
          </select>
          <input type='text' placeholder='Search product' />
          <BsSearch size={30} />
        </div>

        {/* Right Side Options */}
        <div className={classes.order__container}>
          <div className={classes.language}>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg'
              alt='USA FLAG'
            />
            <select>
              <option value='EN'>EN</option>
            </select>
          </div>

          <Link to='/signin'>
            <div>
              <p>Sign In</p>
              <span>Account & Lists</span>
            </div>
          </Link>

          <Link to='/orders'>
            <div>
              <p>Returns</p>
              <span>& Orders</span>
            </div>
          </Link>

          <Link to='/cart' className={classes.cart}>
            <BiCart size={30} />
            <span>{totalItem}</span>
          </Link>
        </div>
      </header>

      <LowerHeader />
    </section>
  );
};

export default Header;
