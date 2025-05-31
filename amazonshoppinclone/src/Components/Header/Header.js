import React from 'react';
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import classes from './Header.module.css';

const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <a href='/'>
              <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
            </a>
          </div>

          <div className={classes.delivery}>
            <span>
              <SlLocationPin />
            </span>
            <div>
              <p>Deliver to</p>
              <span>Ethiopia</span>
            </div>
          </div>

          <div className={classes.search}>
            <select name='' id=''>
              <option value=''>All</option>
            </select>
            <input type='text' />
            <FaSearch size={25} />
          </div>

          <div className={classes.order__container}>
            <a href='' className={classes.language}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' alt='usa flag' />
              <select name='' id=''>
                <option>EN</option>
              </select>
            </a>

            <a href=''>
              <p>Sign In</p>
              <span>Account & List</span>
            </a>

            <a href=''>
              <p>returns</p>
              <span>& Orders</span>
            </a>

            <a href='' className={classes.cart}>
              <IoCartOutline size={25} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
