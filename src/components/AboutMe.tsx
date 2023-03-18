import React from "react";
import "~/styles/Skills.css"

class AboutMe extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <section className="min-h-screen-custom w-full bg-primary text-left">
                <h1 className="px-4 text-white font-bold text-4xl pt-20 tracking-wider">About me</h1>
                <p className="p-4 pt-9 text-white text-base font-bold">
                    I'm a student with a passion for securing digital systems and networks.
                    My areas of expertise include cybersecurity, system administration,
                    and network engineering. I've gained experience implementing security
                    measures like firewalls and antivirus software, as well as performing
                    system and network assessments to identify and address vulnerabilities.
                    I'm dedicated to staying up-to-date with the latest industry trends and best
                    practices to provide the highest level of protection for clients.
                </p>
            </section>
        );
    }
}

export default AboutMe;