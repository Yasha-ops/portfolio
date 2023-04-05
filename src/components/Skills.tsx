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
        description: "Sacréfice de bout d'viarge de crime de bout d'ciarge de cibole de" +
            "colon de viande à chien de purée de boswell de christie de batince.",
        expertise: [
            "Sacrament de saint-ciarge à chien de mautadine.",
            "Jésus Marie Joseph de saint-sacrament de cibouleau.",
            "Jésus Marie Joseph de saint-sacrament de cibouleau.",
            "Batèche de gériboire de bout dviarge de doux Jésus",
        ],
        technologies: [
            //SiWireshark,
            //SiCisco
        ]
    },
    {
        icon: MdSecurity,
        title: "Security",
        description: "Sacréfice de bout d'viarge de crime de bout d'ciarge de cibole de" +
            "colon de viande à chien de purée de boswell de christie de batince.",
        expertise: [
            "Sacrament de saint-ciarge à chien de mautadine.",
            "Jésus Marie Joseph de saint-sacrament de cibouleau.",
            "Jésus Marie Joseph de saint-sacrament de cibouleau.",
            "Batèche de gériboire de bout dviarge de doux Jésus",
        ],
        technologies: [
            //SiWireshark,
            //SiCisco
        ]
    },
    {
        icon: BsStack,
        title: "Fullstack dev",
        description: "Sacréfice de bout d'viarge de crime de bout d'ciarge de cibole de" +
            "colon de viande à chien de purée de boswell de christie de batince.",
        expertise: [
            "Sacrament de saint-ciarge à chien de mautadine.",
            "Jésus Marie Joseph de saint-sacrament de cibouleau.",
            "Jésus Marie Joseph de saint-sacrament de cibouleau.",
            "Batèche de gériboire de bout dviarge de doux Jésus",
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
            <div className="bg-white w-full rounded-xl h-auto flex flex-col items-center p-14 border-2 drop-shadow-xl">
                {
                    [this.props.icon].map((elt, idx) => {
                        const Icon = elt;
                        return <Icon size={'50px'} key={idx}/>
                    })
                }
                <h3 className="font-extrabold text-2xl tracking-wide pt-4 uppercase">{this.props.title}</h3>
                <p className="pt-5 text-base">{this.props.description}</p>

                <h4 className="text-lg font-bold uppercase pt-9">My expertise</h4>
                <ul className="list-disc pt-3 list-inside">
                    {
                        this.props.expertise.map((elt, idx) => {
                            return <li key={idx}>{elt}</li>
                        })
                    }
                </ul>
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
            <section className="h-full min-h-screen-custom w-full flex-1 flex flex-col relative z-10 mt-[-100px] items-center px-4 gap-5 md:flex-row pb-5 md:items-stretch">
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