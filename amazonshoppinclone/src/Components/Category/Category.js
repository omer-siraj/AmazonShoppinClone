import React from 'react';
import CategoryCard from './CategoryCard';
import classes from './category.module.css';
import { CategoryInfos } from './CategoryFullInfo';



const Category = () => {
  return (
    <section className={classes.category__container}>
      {CategoryInfos?.length ? (
        CategoryInfos.map((infos) => (
          <CategoryCard key={infos.name} data={infos} />
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </section>
  );
};

export default Category;
