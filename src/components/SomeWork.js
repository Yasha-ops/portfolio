import React from "react";

import Card from "./Card";

export default function SomeWork() {
    return (
        <section className="relative flex-row flex-auto w-full">
            <div className="flex-auto text-white">
                <h1 className="text-4xl">Let's work together.</h1>
                <p className="text-xl">I'm an fullstack engineer who loves backend development and
                    low-level development ! I help awesome people to build ambitious IT projects.</p>
            </div>

            <div className="flex flex-auto w-full" name="cards">
                <Card title={"Noteworthy technology acquisitions 2021"}
                    description={"Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order."}
                    />
            </div>
            
        </section>
    );
}