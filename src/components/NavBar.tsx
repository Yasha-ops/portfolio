import React from "react";
import "~/styles/NavBar.css"
import * as Scroll from 'react-scroll';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


const REDIR_BUTTONS = [
    {
        title: "Contact",
        href: "contact",
        isPrimary: true
    },
    {
        title: "About me",
        href: "about-me",
        isPrimary: false
    },
    {
        title: "Technologies",
        href: "technologies",
        isPrimary: false
    },
    {
        title: "Blog",
        href: "#",
        isPrimary: false
    },
    {
        title: "Projects",
        href: "projects",
        isPrimary: false
    },
    {
        title: "Hackathons / CTF's",
        href: "hackathons-ctf",
        isPrimary: false
    },
]

// TODO: Add menu mobile
class NavBar extends React.Component<any, any>{

    constructor(props: any){
        super(props);

        this.state = {
            isButtonsHidden: true
        }
    }

    render() {
        return (
            <nav className="p-3 border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                <div className="container flex flex-wrap items-center justify-between mx-auto">
                    <a href="#" className="flex items-center">
                        <img src="https://flowbite.com/docs/images/logo.svg" className="h-6 mr-3 sm:h-10" alt="Yassine Logo" />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Yassine</span>
                    </a>
                    <button data-collapse-toggle="navbar-solid-bg"
                        type="button"
                        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="navbar-solid-bg"
                        aria-expanded="false"
                        onClick={(e) => this.setState({isButtonsHidden : !this.state.isButtonsHidden})}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    </button>
                    <div className={`${this.state.isButtonsHidden ? 'hidden' : 'block absolute top-10 z-10 right-0'} w-full md:block md:w-auto`} id="navbar-solid-bg">
                        <ul className={`flex flex-col mt-4 bg-gray-50 ${this.state.isButtonsHidden ? '' : 'border-x-2 border-b-2 rounded'} md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700`}>
                            {
                                REDIR_BUTTONS.map((elt, idx) => {
                                    return elt.isPrimary ?
                                        <li key={idx}>
                                            <Link activeClass="active" to={elt.href} spy={true} smooth={true} offset={50} duration={500} className="navbar_button_primary" aria-current="page">{elt.title}</Link>
                                        </li>
                                        :
                                        <li key={idx}>
                                            <Link activeClass="active" to={elt.href} spy={true} smooth={true} offset={50} duration={500} className="navbar_button navbar_button_secondary" aria-current="page">{elt.title}</Link>
                                        </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavBar;