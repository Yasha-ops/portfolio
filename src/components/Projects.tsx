import React, { Component } from "react";
import Carousel, { CarouselItem, GridCarousel } from "./Carousel";
import { Card } from "./Card";

import gearedCameraInCVideo from "~/assets/GCC.mp4"
import torideani from "~/assets/Torideani.mp4"
import { TbGitCommit, TbPhotoPlus } from "react-icons/tb"
import { AiFillStar } from "react-icons/ai"

import gummu from "~/assets/GearedCameraInC.png"
import krylegal from "~/assets/krylegal.png"
import eyet from "~/assets/Eye-t.png"


const PROJECTS = [
    {
        imgURL: gearedCameraInCVideo,
        title: "Geared Camera In C",
        buttonTitle: "Click me",
        isVideo: true,
        description: "AI automatic camera facial recognition from scratch in C",
        stars: 12,
        commits: 12
    },
    {
        imgURL: torideani,
        title: "Torideani",
        buttonTitle: "Click me",
        isVideo: true,
        stars: 12,
        description: "Cross-plateform Multiplayer Game hide and seek C#",
        commits: 12
    },
    {
        imgURL: gummu,
        title: "Gummu",
        buttonTitle: "Click me",
        isVideo: true,
        description: "Decentralized Music streaming plateforme on Massa Blockchain",
        stars: 12,
        commits: 12
    },
    {
        imgURL: krylegal,
        title: "KryLegal",
        description: "Decentralized Music streaming plateforme on Massa Blockchain",
        buttonTitle: "Click me"
    },
    {
        imgURL: krylegal,
        title: "42sh",
        description: "Decentralized Music streaming plateforme on Massa Blockchain",
        buttonTitle: "Click me"
    },
    {
        imgURL: krylegal,
        title: "DHCPouxy",
        description: "Decentralized Music streaming plateforme on Massa Blockchain",
        buttonTitle: "Click me"
    },
]


// TODO: Add project description image etc... Flip card animation
const Project = (props: any) => {
    return (
        <div className="card-container group">
            <div className="flex-auto w-full bg-white group-hover:scale-[1.2] flex flex-col justify-between h-full text-center">
                <div className="text-center w-full">
                    <span className="pb-5 font-semibold text-secondary text-lg">{props.title}</span>
                    <hr className="h-px bg-primary border-0"></hr>
                </div>

                <div className="w-full text-center flex-auto items-center justify-center flex">
                    <p>{props.description}</p>
                </div>

                <div className="w-full">
                    <hr className="h-px bg-primary border-0 "></hr>
                    <div className="w-full flex justify-between px-5">
                        <div className="flex items-center">
                            <AiFillStar />
                            <span>{props.stars}</span>
                        </div>
                        <span className="font-semibold">
                            More infos
                        </span>
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
            <section className="h-auto w-full bg-primary text-center flex flex-col items-center px-4 gap-5 py-20">
                <h1 className="text-white font-bold text-4xl tracking-wider">My projects</h1>
                <p className="pb-4 text-lg font-semibold text-white">Here are a few padeed dede st projects I've worked on.</p>
                <GridCarousel cols={1} rows={3} gap={5}>
                    {
                        PROJECTS.map((elt) => {
                            return <Project
                                imgURL={elt.imgURL}
                                title={elt.title}
                                buttonTitle={elt.buttonTitle}
                                isVideo={elt.isVideo}
                                description={elt.description ?? ""}
                                stars={elt.stars ?? 0}
                                commits={elt.commits ?? 0}
                            />
                        })
                    }
                </GridCarousel>
            </section>
        )
    }
}

export default Projects;