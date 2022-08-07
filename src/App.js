import React, { Suspense, useEffect, useRef } from 'react';

/* Components */
import Scene from './components/Scene';
import NavBar from './components/Navbar';
import MainTitle from './components/MainTitle';


export default function App() {
  return (
    <div className='flex mx-5 my-5 w-screen h-screen bg-green-500' name='appBody'>
      <div className='flex flex-col flex-auto bg-green-500'>
        <NavBar/>
        <MainTitle/>
      </div>
    </div>
  );
}