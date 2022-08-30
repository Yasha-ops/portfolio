import React from "react";
import Scene from "./Scene";

export default function MainTitle() {
  return (
    <section className="relative flex-auto w-full h-full">
      <main className="absolute justify-center items-center w-full h-full main">
        {/* 3D Model */}
        <Scene />

        {/* Greetings */}
        <div className="flex justify-center items-center greetings" name="greetings">

          <div className="title-div" name="page_title">

            <h1 className="title" name="page_title">
              Hi, my name is <strong>Yassine</strong>.
            </h1>

            <div className="description" name="page_description">
              <p>
                Fullstack software engineer based in Paris, France.
              </p><p>
                I create the digital experience your users love !
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Scrool down */}
      <div className="flex absolute bottom-0 flex-auto justify-center items-center w-full" name="scroll_down">
        <div className="flex-row justify-center items-center mb-2 w-40 text-2xl text-center text-white animate-pulse">
          <h1>Scroll down !</h1>
          <div className="flex justify-center items-center animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
}