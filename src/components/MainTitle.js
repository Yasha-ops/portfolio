import React from "react";
import Scene from "./Scene";

export default function MainTitle() {
  return (
    <main className="main flex-auto justify-center items-center">
        <Scene/>

        {/* Greetings */}
        <div className="greetings flex justify-center items-center  bg-blue-400 lgs:bg-red-400 " name="greetings">
        <div className="flex-auto ml-10 text-left" name="page_title_area">
            <h1 className="mb-4 text-4xl lgs:text-8xl text-white font-WorkSans" name="page_title">
              Hi, my name is <strong>Yassine</strong>.
            </h1>
            <p className="text-xl text-white font-WorkSans">
              Fullstack software engineer based in Paris, France.
            </p>
            <p className="text-xl text-white font-WorkSans">
              I create the digital experience your users love ! 
            </p>

          </div>
      </div>

    </main>
  );
}