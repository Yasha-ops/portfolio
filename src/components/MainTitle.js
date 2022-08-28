import React from "react";
import Scene from "./Scene";

export default function MainTitle() {
  return (
    <section className="flex flex-auto justify-center items-center w-full h-screen bg-orange-500">
      <div className="flex-row-reverse flex-auto w-auto h-full lgs:flex" >

        {/* 3D avatar's face */}
        <div className="w-auto h-2/3 bg-blue-900 lgs:w-1/2 lgs:h-full" name="avatar_face">
            <Scene/>
        </div>

        {/* Greetings */}
        <div className="flex justify-center items-center w-auto h-1/3 bg-blue-400 lgs:bg-red-400 lgs:w-1/2 lgs:h-full" name="greetings">
          <div className="flex-auto text-center lgs:ml-10 lgs:text-left" name="page_title_area">
            <h1 className="mb-4 text-7xl text-white lgs:text-8xl font-WorkSans" name="page_title">
              Hi, my name is <strong>Yassine</strong>.
            </h1>
            <p className="hidden text-white text-md lgs:text-xl font-WorkSans lgs:block">
              Fullstack software engineer based in Paris, France.
            </p>
            <p className="hidden text-white text-md lgs:text-xl font-WorkSans lgs:block">
              I create the digital experience your users love ! 
            </p>

          </div>

        </div>
      </div>

    </section>
  );
}