import React from 'react';
import {CategoryInfos} from './CategoryFullInfo'
import CategoryCard from './CategoryCard';
import classes from './category.module.css'

const Category = () => {
  return (
    <section className={classes.category__container}>
            {
                CategoryInfos.map((infos) => (
                <CategoryCard data={infos} />
            ))
            }

    </section>
  );
};

export default Category;
