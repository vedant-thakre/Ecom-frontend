import React from 'react'
import Navigation from './customer/components/navigation/Navigation';
import HomePage from './customer/pages/HomePage/HomePage';

const App = () => {
  return (
    <div className=''>
      <Navigation/>
      <div>
        <HomePage/>
      </div>
    </div>
  );
}

export default App