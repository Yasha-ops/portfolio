import React from "react";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

// TODO
export default class Contact extends React.Component {
    render() {
        return (
            <section className="h-auto w-full dark:bg-background bg-white text-center px-4 py-20 dark:text-white text-dark flex flex-col gap-[60px]" id='hackathons-ctf'>
                <h1 className="font-bold text-4xl tracking-wider ">Contact me</h1>

                <div className="flex w-full justify-center items-center px-5">
                    <div className="flex gap-10">

                        <a href={"https://www.linkedin.com/in/yassine-damiri/"}>
                            <SiLinkedin size={'100%'} />
                        </a>
                        <a href={"https://www.linkedin.com/in/yassine-damiri/"}>
                            <SiGithub size={'100%'} />
                        </a>
                        <a href={"https://twitter.com/YasDams"}>
                            <SiTwitter size={'100%'} />
                        </a>
                        <a href={"https://www.instagram.com/yassinedamiri/"}>
                            <SiInstagram size={'100%'} />
                        </a>
                    </div>
                </div>
            </section>
        )
    }

}