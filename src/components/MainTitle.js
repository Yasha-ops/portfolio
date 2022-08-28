import React from "react";
import Scene from "./Scene";

export default function MainTitle() {
  return (
    <main className="main flex-auto justify-center items-center">
      <Scene />

      {/* Greetings */}
      <div className="greetings flex justify-center items-center bg-blue-400 desktop:bg-purple-500 laptop:bg-red-400 tablet:bg-green-400 big_tablet:bg-yellow-500" name="greetings">
        
        <div className="title-div" name="page_title">

          <h1 className="title" name="page_title">
            Hi, my name is <strong>Yassine</strong>.
          </h1>
          
          <div className="description"  name="page_description">
            <p>
              Fullstack software engineer based in Paris, France.
            </p><p>
              I create the digital experience your users love !
            </p>

          </div>

        </div>
      </div>

    </main>
  );
}