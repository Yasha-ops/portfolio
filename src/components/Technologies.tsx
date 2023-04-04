import React from 'react'
import { FaJava } from 'react-icons/fa';
import { SiAmazonaws, SiAngular, SiApache, SiAssemblyscript, SiCplusplus, SiCsharp, SiCss3, SiDocker, SiFirebase, SiGo, SiHtml5, SiJavascript, SiLatex, SiMysql, SiNginx, SiNodedotjs, SiOcaml, SiPostgresql, SiPython, SiReact, SiRedis, SiRust, SiSvelte, SiTypescript } from 'react-icons/si';
import { GridCarousel } from './Carousel';


const TECHNOLOGIES = [
    SiDocker, SiReact,
    SiPython, SiRust,
    SiGo, SiCsharp,
    SiTypescript, SiAngular,
    SiCplusplus, SiJavascript,
    FaJava, SiSvelte, SiOcaml,
    SiAssemblyscript, SiHtml5,
    SiCss3, SiLatex, SiRedis,
    SiMysql, SiPostgresql, SiAmazonaws,
    SiNodedotjs, SiFirebase,
    SiNginx, SiApache
];

const Techno = (props: any) => {
    const Icon =  props.icon;

    return (
        <div className='aspect-square w-full'>
            <Icon size={'100%'} className="dark:text-white text-dark"/>
        </div>
    );
}

// TODO
export default class Technologies extends React.Component {
    render() {
        return (
            <section className="h-auto w-full dark:bg-background text-center text-dark px-4 py-20 dark:text-white text-dark px-4">
                <h1 className="dark:text-white text-dark font-bold text-4xl tracking-wider">Technologies</h1>
                <h2 className='text-lg pt-4 pb-10 font-semibold'>Astie de calvinouche de viande à chien de purée de calvaire de crime.</h2>


                <GridCarousel cols={5} gap={5} isHorizontal={true}>
                    {
                        TECHNOLOGIES.map((elt : any, index: number) => {
                            return <Techno
                                key={index}
                                icon={elt}
                            />
                        })
                    }
                </GridCarousel>
            </section>
        );
    }
}