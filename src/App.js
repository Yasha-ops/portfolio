import React, { Suspense, useEffect, useRef } from 'react';

/* Components */
import MainTitle from './components/MainTitle';

export default function App() {
  return (
    <div className='flex mx-5 w-full h-full bg-yellow-500' name='appBody'>
      <div className='flex flex-col flex-auto'>
        <MainTitle/>
      </div>
    </div>
  );
}