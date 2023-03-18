import React, { Component } from "react";
import { Card } from "./Card";

class Projects extends React.Component {
    render() {
        return (
            <section className="h-auto w-full bg-primary text-left flex flex-col items-center px-4 gap-5 py-20">
                <h1 className="px-4 text-white font-bold text-4xl tracking-wider">My projects</h1>
                <h2>Here are a few past projects I've worked on.</h2>

                <div className="flex flex-col md:grid md:grid-rows-2 md:grid-flow-col gap-5">
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
                    <Card
                        imgURL="https://mattfarley.ca/img/projects/chronicled.png"
                        title="Bâtard de mosus de marde de cibouleau."
                        buttonTitle="Click me"
                    />
                </div>
            </section>
        )
    }
}

export default Projects;