import React, { Suspense, useEffect, useRef } from 'react';
import Wave from 'react-wavify'


/* Components */
import Scene from './components/Scene';
import NavBar from './components/Navbar';
import MainTitle from './components/MainTitle';
import Presentation from './components/Presentation';
import MyWork from './components/MyWork';


export default function App() {
  return (
    <div className='flex mx-5 my-5 w-screen h-screen bg-green-500' name='appBody'>
      <div className='flex flex-col flex-auto bg-green-500'>
        <MainTitle />
        <Presentation />
        <MyWork />
      </div>
    </div>
  );
}