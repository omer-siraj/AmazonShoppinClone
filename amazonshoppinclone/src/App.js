// import React from "react";
// import Header from "./Components/Header/Header";
// import CarouselEffect from './Components/Carousel/CarouselEffect';
// import Category from "./Components/Category/Category";
// import Product from "./Components/Product/Product";
// import Routing from "./Router";

// function App() {
//   return (
//     <div className="App">

//         <Routing />
    
//     </div>
//   );
// }

// export default App;


import { BrowserRouter } from 'react-router-dom';
import Routing from './Router';

function App() {
  return (
    <div className='App'>
          <Routing />
    </div>

    //   <BrowserRouter>
    //     <Routing />
    //  </BrowserRouter>
    
    
  );
}

export default App;
