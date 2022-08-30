import React, { Suspense, useEffect, useRef } from 'react';

/* Components */
import MainTitle from './components/MainTitle';
import NavBar from './components/NavBar';
import SomeWork from './components/SomeWork';

export default function App() {
  return (
    <div className="w-full h-full">
      <NavBar/>
      <MainTitle/>
      <SomeWork/>
      <section>
        <h1>Pouxy content !!</h1>
      </section>
    </div>  
  );
}