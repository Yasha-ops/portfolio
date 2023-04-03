import React, { Component } from "react";
import Carousel, { CarouselItem } from "./Carousel";
import { Card } from "./Card";

import gearedCameraInCVideo from "~/assets/GCC.mp4"
import torideani from "~/assets/Torideani.mp4"
import { TbGitCommit, TbPhotoPlus } from "react-icons/tb"
import { AiFillStar } from "react-icons/ai"

import gummu from "~/assets/GearedCameraInC.png"
import krylegal from "~/assets/krylegal.png"
import eyet from "~/assets/Eye-t.png"

const Project = (props: any) => {
    return (
        <div className="card-container group">
            <div className="w-[350px] bg-white group-hover:scale-[1.2] flex flex-col justify-between h-full text-center">
                <div className="text-center">
                    <span className="pb-5 font-semibold text-secondary text-lg">{props.title}</span>
                    <hr className="h-px bg-primary border-0"></hr>
                </div>

                <div className="w-full text-center px-4 bg-green">
                    <span className="text-md">{props.description}</span>
                </div>

                <div className="w-full">
                    <hr className="h-px bg-primary border-0 "></hr>
                    <div className="w-full flex justify-between px-5">
                        <div className="flex items-center">
                            <AiFillStar />
                            <span>{props.stars}</span>
                        </div>
                        <div className="flex items-center">
                            <TbGitCommit />
                            <span>{props.commits}</span>
                        </div>
                    </div>
                </div>
            </div>

            < figcaption
                className="group-hover:opacity-100" >
                <h3>{props.title}</h3>
                <button type="button">
                    {props.buttonTitle}
                </button>
            </figcaption >
        </div >
    );
}


class Projects extends React.Component {
    render() {
        return (
            <section className="h-auto w-full bg-primary text-left flex flex-col items-center px-4 gap-5 py-20">
                <h1 className="px-4 text-white font-bold text-4xl tracking-wider">My projects</h1>
                <h2>Here are a few past projects I've worked on.</h2>

                <Carousel>
                    <CarouselItem>
                        <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-2 md:grid-flow-col gap-5" data-name='item1'>
                            <Project
                                imgURL={gearedCameraInCVideo}
                                title="Geared Camera In C"
                                buttonTitle="Click me"
                                isVideo={true}
                                description={"AI automatic camera facial recognition from scratch in C"}
                                stars={12}
                                commits={12}
                            />
                            <Project
                                imgURL={torideani}
                                title="Torideani"
                                buttonTitle="Click me"
                                isVideo={true}
                                stars={12}
                                description={"Cross-plateform Multiplayer Game hide and seek C#"}
                                commits={12}
                            />
                            <Project
                                imgURL={gummu}
                                title="Gummu"
                                buttonTitle="Click me"
                                isVideo={true}
                                description={"Decentralized Music streaming plateforme on Massa Blockchain"}
                                stars={12}
                                commits={12}
                            />
                        </div>
                    </CarouselItem>

                    <CarouselItem>
                        <div className="grid grid-cols-1 grid-rows-3 md:grid-rows-2 md:grid-flow-col gap-5" data-name='item2'>
                            <Project
                                imgURL={krylegal}
                                title="KryLegal"
                                buttonTitle="Click me"
                            />
                            <Project
                                imgURL={krylegal}
                                title="42sh"
                                buttonTitle="Click me"
                            />
                            <Project
                                imgURL={krylegal}
                                title="DHCPouxy"
                                buttonTitle="Click me"
                            />
                        </div>
                    </CarouselItem>
                </Carousel>
            </section>
        )
    }
}

export default Projects;