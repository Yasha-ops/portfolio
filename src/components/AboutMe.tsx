import React from "react";
import "~/styles/Skills.css"


class AboutMe extends React.Component {
    render() {
        return (
            <section className="w-full bg-primary h-auto flex flex-col justify-center items-center pb-10 text-justify" id='about-me'>
                <div className="w-full h-full md:w-1/2 max-w-[500px] md:max-w-[800px] flex justify-center items-center flex-col">
                    <h1 className="px-4 text-white font-bold text-4xl pt-20 tracking-wider text-center">About me</h1>
                    <p className="p-4 pt-9 text-white text-lg font-bold pb-[100px]">

                    Hey, I'm <span className='font-black'>Yassine Damiri</span>, a cybersecurity engineer student
                    at <span className="font-black">EPITA</span>, and front-end developer with a passion for IT projects and surfing.
                    I'm all about using technology to solve problems and protect digital assets.
                    With my programming skills in backend and frontend, I've worked on several projects,
                    creating beautiful, user-friendly interfaces and efficient and secure backend solutions.
                    <br></br>
                    When I'm not working on IT projects or studying, you'll find me catching waves at the beach.
                    Surfing is my favorite hobby, and it helps me stay focused and energized.
                    </p>

                </div>
            </section>
        );
    }
}

export default AboutMe;