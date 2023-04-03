import React, { useEffect, useState, Children } from "react";
import "~/styles/Hero.css"
import { TypeAnimation } from 'react-type-animation';

import { CircleGrid, Donut, Diamond, Star } from "react-awesome-shapes";

interface HeroProps {
    /* Add props */
}

class Hero extends React.Component<HeroProps, { [key: string]: any }> {

    constructor(props: HeroProps) {
        super(props);
    }

    render() {
        return (
            <section className="h-screen-custom w-full flex-1 flex flex-col background justify-center items-center text-center relative overflow-hidden">
                <CircleGrid
                    size={["200px", "200px", "200px", "200px"]}
                    color='#93c5fd'
                    zIndex={1}
                    top='0px'
                    left='-30px'
                />

                <Donut
                    color='#93c5fd'
                    size="300px"
                    width={['40px', '40px', '60px', '60px']}
                    bottom='-100px'
                    right='-70px'
                    zIndex={2}
                />

                <Diamond
                    color='#93c5fd'
                    size="80px"
                    left='0px'
                    bottom='100px'
                    zIndex={2}
                />

                <Star
                    color='#93c5fd'
                    size="60px"
                    zIndex={2}
                    right='20px'
                    top='40px'
                />


                <div className="mb-[100px] relative">
                    <h1 className="title pb-5">Hey There, <br /> I'm <span className="text-blue-300">Yassine</span></h1>
                    <h2 className="subtitle">
                        I'am a
                        <strong>
                            <TypeAnimation sequence={[
                                ' Fullstack developer', // Types 'One'
                                1000, // Waits 1s
                                ' Pentester', // Deletes 'One' and types 'Two'
                                2000, // Waits 2s
                                ' Cybersecurity Engineer Student', // Types 'Three' without deleting 'Two'
                                4000, // Waits 2s
                            ]}
                                wrapper="span"
                                cursor={true}
                                repeat={Infinity}
                            />
                        </strong>
                    </h2>
                </div>
            </section>
        );
    }

}

export default Hero;