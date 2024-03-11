import React from 'react';
import {Helmet} from "react-helmet";
import './assets/frontend/assets/bootstrap/css/bootstrap.min.css';

const App = () => {
  return (
    <>
    <Helmet>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    </Helmet>
     <h1 className='bg-light'>Usama Hassan</h1> 
    </>
  )
}

export default App
