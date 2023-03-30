import React from "react";
import "~/styles/Hero.css"
import Scene from "./Scene";

class Hero extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="h-full min-h-screen-custom w-full flex-1 flex flex-col background">
                <div className="px-4 pt-20">
                    <h1 className="title pb-5">Hey There, <br /> I'm Yassine</h1>
                    <h2 className="subtitle">
                        I enjoy crafting strong and efficient <br /> solutions that protect against threats
                    </h2>
                </div>
            </section>
        );
    }

}

export default Hero;