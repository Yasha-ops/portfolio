import React from "react";
import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter } from "react-icons/si";

// TODO
export default class Contact extends React.Component {
    render() {
        return (
            <section className="h-auto w-full dark:bg-background bg-white text-center px-4 md:py-10 dark:text-white text-dark flex flex-col gap-[60px]" id='hackathons-ctf'>
                <h1 className="font-bold text-4xl tracking-wider ">Contact me</h1>

                <div className="flex w-full justify-center items-center px-5">
                    <div className="flex gap-10">
                        <a href={"https://www.linkedin.com/in/yassine-damiri/"} className='md:max-w-[70px]'>
                            <SiLinkedin size={'100%'} />
                        </a>
                        <a href={"https://www.linkedin.com/in/yassine-damiri/"} className='md:max-w-[70px]'>
                            <SiGithub size={'100%'} />
                        </a>
                        <a href={"https://twitter.com/YasDams"} className='md:max-w-[70px]'>
                            <SiTwitter size={'100%'} />
                        </a>
                        <a href={"https://www.instagram.com/yassinedamiri/"} className='md:max-w-[70px]'>
                            <SiInstagram size={'100%'} />
                        </a>
                    </div>
                </div>
            </section>
        )
    }

}