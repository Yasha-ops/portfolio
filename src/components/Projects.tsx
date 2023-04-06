import React, { Component } from "react";
import Carousel, { CarouselItem, GridCarousel } from "./Carousel";

import gearedCameraInCVideo from "~/assets/GCC.mp4"
import torideani from "~/assets/Torideani.mp4"
import { TbGitCommit, TbPhotoPlus } from "react-icons/tb"
import { AiFillStar } from "react-icons/ai"

import gummu from "~/assets/GearedCameraInC.png"
import krylegal from "~/assets/krylegal.png"
import eyet from "~/assets/Eye-t.png"

import { SiGithub } from 'react-icons/si';
import { AiOutlineLink, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdElectricBike } from "react-icons/md";

const PROJECTS = [
    {
        imgURL: gearedCameraInCVideo,
        title: "Geared Camera In C",
        buttonTitle: "Click me",
        isVideo: true,
        description: "AI automatic camera with facial recognition capabilities from scratch using the C programming language.",
        stars: 2,
        commits: 118,
        github: "https://github.com/thurayash/GearedCameraInC",
        website: "https://yasha-ops.github.io/GearedCameraInC",
    },
    {
        imgURL: torideani,
        title: "Torideani",
        buttonTitle: "Click me",
        isVideo: true,
        stars: 2,
        description: "Cross-platform multiplayer hide and seek game built using C#. Features online real-time gameplay.",
        commits: 70,
        github: "https://github.com/Yasha-ops/Torideani",
        website: "https://www.youtube.com/watch?v=VH1xQjHz0Eo"
    },
    {
        imgURL: gummu,
        title: "Gummu",
        buttonTitle: "Click me",
        isVideo: true,
        description: "Decentralized and equitable music streaming platform for indep artits built on the Massa blockchain.",
        stars: 0,
        commits: 137,
        github: "https://github.com/Gummu/gummu-web-app",
        website: "https://www.linkedin.com/posts/gotta-go-hack_projet-gummu-1er-du-th%C3%A8me-art-activity-7019593142089707521-DpFR/?utm_source=share&utm_medium=member_desktop"
    },
    {
        imgURL: krylegal,
        title: "KryLegal",
        description: "AI powered website simplifying reading of lengthy terms of service agreements for other websites.",
        buttonTitle: "Click me",
        stars: 21,
        commits: 72,
        github: "https://github.com/Opportunists/openai-hackathon-les-cracks-FRONT",
        website: "#"
    },
    {
        imgURL: krylegal,
        title: "42sh",
        description: "Shell built from scratch using C programming language.",
        buttonTitle: "Click me",
        stars: 4,
        commits: 160,
        github: "https://github.com/Yasha-ops/42sh-epita",
        website: "#"
    },
    {
        imgURL: krylegal,
        title: "DHCPouxy",
        stars: 6,
        commits: 198,
        description: "DHCP implementation built from scratch using C programming language according to RFC specifications.",
        buttonTitle: "Click me",
        website: "#",
        github: "https://github.com/DHCPouxy/DHCP"
    },
]


// TODO: Add project description image etc... Flip card animation
const Project = (props: any) => {
    console.log(props)
    return (
        <div className="card-container group">
            <div className="flex-auto w-full bg-background flex flex-col h-full text-center text-green-500">
                <div className="text-center w-full bg-[#D5CDCA] text-black">
                    <div className="w-full flex px-5 items-center gap-5">
                        <div className="flex justify-around gap-2" data-name="buttons">
                            <div className="rounded-full bg-[#F21D2C] w-4 h-4"></div>
                            <div className="rounded-full bg-[#FCA112] w-4 h-4"></div>
                            <div className="rounded-full bg-[#49B446] w-4 h-4"></div>
                        </div>
                        <span className="font-medium text-secondary text-lg text-center">{props.title}</span>
                    </div>
                </div>

                <div className="w-full text-left flex-auto flex flex-col px-4 gap-1 pt-4">
                    <p>yasha: ~$ <span className="text-white">cat README.md</span></p>
                    <p className="text-white text-justify">{props.description}</p>
                </div>

                <div className="w-full bg-[#D5CDCA]">
                    <div className="w-full flex justify-between px-5 text-black">
                        <div className="flex items-center">
                            <AiFillStar />
                            <span>{props.stars}</span>
                        </div>
                        <span className="font-semibold">
                            Click for infos
                        </span>
                        <div className="flex items-center">
                            <TbGitCommit />
                            <span>{props.commits}</span>
                        </div>
                    </div>
                </div>
            </div>

            <figcaption className="group-hover:opacity-100 hidden group-hover:flex">
                <h3>{props.title}</h3>
                <div className="flex w-full justify-around px-5">
                    <a href={props.github} type="button" className='max-h-[70px]'><SiGithub size={'100%'} /></a>
                    <a href={props.website} type="button" className='max-h-[70px]'><AiOutlineLink size={'100%'} /></a>
                    <a href={'#'} type="button" className='max-h-[70px]'><AiOutlineInfoCircle size={'100%'} /></a>
                </div>
            </figcaption >
        </div >
    );
}


class Projects extends React.Component {
    render() {
        return (
            <section className="h-auto w-full bg-primary text-center flex flex-col items-center px-4 gap-5 py-20" id='projects'>
                <h1 className="dark:text-background text-white font-bold text-4xl tracking-wider">My projects</h1>
                <p className="dark:text-background text-white pb-4 text-lg font-semibold text-white">Here are some of my latest projects:</p>
                <div className='w-full md:hidden block' data-name='small'>
                    <GridCarousel cols={1} rows={2} gap={5}>
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
                                    github={elt.github}
                                    website={elt.website}
                                />
                            })
                        }
                    </GridCarousel>
                </div>
                <div className="w-full hidden md:block max-w-[900px]" data-name='medium'>
                    <GridCarousel cols={2} rows={3} gap={5}>
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
                                    github={elt.github}
                                    website={elt.website}
                                />
                            })
                        }
                    </GridCarousel>
                </div>
            </section>
        )
    }
}

export default Projects;