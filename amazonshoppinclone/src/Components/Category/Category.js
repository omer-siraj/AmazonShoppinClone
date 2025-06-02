// import React from 'react';
// import {CategoryInfos} from './CategoryFullInfo'
// import CategoryCard from './CategoryCard';
// import classes from './category.module.css'

// const Category = () => {
//   return (
//     <section className={classes.category__container}>

//           {CategoryInfos.map((infos) => (
//             <CategoryCard key={infos.name} data={infos} />
//           ))}

  

//     </section>
//   );
// };

// export default Category;


// src/Components/Category/Category.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CategoryCard from './CategoryCard';
import classes from './category.module.css';

const Category = () => {
  const [categories, setCategories] = useState([]);

//   useEffect(() => {
//   axios.get('https://fakestoreapi.com/products/categories')
//     .then(res => {
//       console.log('Categories from API:', res.data); // Make sure this logs correctly
//       // your mapping logic
//     })
//     .catch(err => console.error('Error fetching categories', err));
// }, []);

  
  
  
  
  
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(res => {
        const data = res.data;
        const categoryList = data.map((name, index) => ({
          name,
          title: name.charAt(0).toUpperCase() + name.slice(1),
          imgLink: `https://picsum.photos/300/200?random=${index + 1}`,
        }));
        setCategories(categoryList);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <section className={classes.category__container}>
      {categories.map((infos) => (
        <CategoryCard key={infos.name} data={infos} />
      ))}
    </section>
  );
};

export default Category;
