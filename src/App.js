import React, { Suspense, useEffect, useRef } from 'react';

/* Components */
import MainTitle from './components/MainTitle';

export default function App() {
  return (
    <div className="h-full w-full">
      <MainTitle/>
  
      <section>
        <h1>Pouxy content !!</h1>
      </section>

    </div>  
  );
}