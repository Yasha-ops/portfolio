import React, { Suspense, useEffect, useRef } from 'react';

/* Components */
import Scene from './components/Scene';
import NavBar from './components/Navbar';


export default function App() {
  return (
    <div name='appBody'>
      <Scene/>
        <h1>
          Hello World !
        </h1>
    </div>
  );
}