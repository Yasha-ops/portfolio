import React from "react";
import { IconType } from "react-icons";

import { FaNetworkWired, FaReact, FaPython, FaDocker, FaRust } from "react-icons/fa";
import { SiWireshark, SiCisco } from "react-icons/si"
import { MdSecurity } from 'react-icons/md';
import { BsStack } from 'react-icons/bs';
import { TbBrandCpp } from 'react-icons/tb';
import { FiMoreHorizontal } from 'react-icons/fi';

const CARDS = [
    {
        icon: FaNetworkWired,
        title: "Network",
        description: "I have experience in designing and implementing computer networks, including LAN, WAN, and WLAN. " +
                "I am proficient in configuring network devices such as routers, switches, firewalls, and load balancers. " +
                "Additionally, I have experience in troubleshooting network issues and optimizing network performance. ",
        expertise: [
            "Designing and implementing computer networks",
            "Configuring network devices such as routers, switches, firewalls, and load balancers",
            "Troubleshooting network issues",
            "Optimizing network performance"
        ],
        technologies: [
            //SiWireshark,
            //SiCisco
        ]
    },
    {
        icon: MdSecurity,
        title: "Security",
        description: "I have extensive knowledge and experience in cybersecurity, including risk assessment, " +
            "threat analysis, vulnerability management, and incident response. I am proficient in various " +
            "security technologies such as firewalls, intrusion detection and prevention systems, and security " +
            "information and event management systems.",
        expertise: [
            "Risk assessment",
            "Threat analysis",
            "Vulnerability management",
        ],
        technologies: [
            //SiWireshark,
            //SiCisco
        ]
    },
    {
        icon: BsStack,
        title: "Fullstack dev",
        description: "I have hands-on experience in developing and deploying full-stack applications using " +
            "various technologies such as React, Python, JavaScript, Node.js, and SQL. " +
            "I am proficient in building RESTful APIs, implementing authentication and authorization " +
            "mechanisms, and using cloud services such as AWS and Azure. Additionally, I have experience "  +
            "with Docker and Rust, and I am familiar with Angular and Svelte.",
        expertise: [
            "Developing and deploying full-stack applications",
            "Building RESTful APIs",
            "Implementing authentication and authorization mechanisms",
            "Using cloud services such as AWS and Azure"
        ],
        technologies: [
            //FaReact, FaPython, FaDocker, FiMoreHorizontal
        ]
    }
]


interface CardProps {
    icon: any,
    title: string,
    description: string,
    expertise: Array<string>,
    techologies: Array<any>
}

class Card extends React.Component<CardProps, { [key: string]: any }> {
    render() {
        return (
            <div className="bg-white w-full rounded-xl h-auto flex flex-col items-center p-14 border-2 drop-shadow-xl max-w-[500px]">
                {
                    [this.props.icon].map((elt, idx) => {
                        const Icon = elt;
                        return <Icon size={'50px'} key={idx}/>
                    })
                }
                <h3 className="font-extrabold text-2xl tracking-wide pt-4 uppercase">{this.props.title}</h3>
                <p className="pt-5 text-base text-justify">{this.props.description}</p>

                <h4 className="text-lg font-bold uppercase pt-9">My expertise</h4>
                <div className="w-full">
                <ul className="list-disc pt-3 list-inside text-left">
                    {
                        this.props.expertise.map((elt, idx) => {
                            return <li key={idx}>{elt}</li>
                        })
                    }
                </ul>
                </div>
                {/*<h4 className="text-lg font-bold uppercase pt-16">Technologies</h4>*/}
                <div className={`grid grid-rows-${Math.round(this.props.techologies.length / 3 + 1)} gap-10 pt-5 grid-cols-2`}>

                        {
                            this.props.techologies.map((elt, idx) => {
                                const Icon = elt;
                                return (
                                        <Icon size={'50px'} />
                                );
                            })
                        }
                </div>
            </div>
        );
    }
}

interface SkillsProps {
}

class Skills extends React.Component<SkillsProps>{

    constructor(props: SkillsProps) {
        super(props);
    }

    render() {
        return (
            <section className="h-full w-full flex-1 flex flex-col relative z-10 mt-[-100px] items-center px-4 gap-5 md:flex-row pb-5 md:items-stretch justify-center items-center">
                {
                    CARDS.map((elt, idx) => {
                        return <Card
                            icon={elt.icon}
                            title={elt.title}
                            description={elt.description}
                            expertise={elt.expertise}
                            techologies={elt.technologies}
                            key={idx}
                        />
                    })
                }
            </section>

        );
    }
}

export default Skills;