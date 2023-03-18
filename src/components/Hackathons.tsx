import React from "react";
import { Card } from "./Card";

class Hackathons extends React.Component {
    render () {
        return (
            <section className="min-h-screen-custom w-full bg-white text-center text-dark px-4 py-20">
                <h1 className="font-bold text-4xl tracking-wider">Hackathons/CTF I've done</h1>
                <p className="p-4 pt-9 text-base font-bold">
                    Calvinouche de viarge de saint-cimonaque de Jésus de plâtre
                </p>

                <div className="flex flex-col md:grid md:grid-rows-2 md:grid-cols-3 gap-5">
                    <Card
                        imgURL="https://mattfarley.ca/img/projects/chronicled.png"
                        title="Bâtard de mosus de marde de cibouleau."
                        buttonTitle="Click me"
                    />
                    <Card
                        imgURL="https://mattfarley.ca/img/projects/chronicled.png"
                        title="Bâtard de mosus de marde de cibouleau."
                        buttonTitle="Click me"
                    />
                    <Card
                        imgURL="https://mattfarley.ca/img/projects/chronicled.png"
                        title="Bâtard de mosus de marde de cibouleau."
                        buttonTitle="Click me"
                    />
                    </div>
            </section>
        );
    }

}

export default Hackathons;