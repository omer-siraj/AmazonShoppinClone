import React from 'react';
import { FaSearch } from "react-icons/fa";
import { SlLocationPin } from "react-icons/sl";
import { IoCartOutline } from "react-icons/io5";
import classes from './Header.module.css';
import LowerHeader from './LowerHeader';
import {Link} from 'react-router-dom';


const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            <Link to='/'>
              <img src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt='amazon logo' />
            </Link>
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
            <FaSearch size={40} />
          </div>

          <div className={classes.order__container}>
            <Link to='' className={classes.language}>
              <img src='https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg' alt='usa flag' />
              <select name='' id=''>
                <option>EN</option>
              </select>
            </Link>

            <Link to='/auth' className={classes.cart}>
            

              <p>Sign In</p>
              <span>Account & List</span>
            </Link>


            <Link to='/Orders'>
              <p>returns</p>
              <span>& Orders</span>
            </Link>

            <Link to='/' className={classes.cart}>
              <IoCartOutline size={25} />
              <span>0</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerHeader />
    </>
  );
};

export default Header;
