import React from 'react';

export default function NavBar() {
    return (
        <section>
            <ul className="navbar">
                <li className="mt-7 ml-7">
                    <div className='divide-x-2'>

                    <img className='inline-block mr-3 w-12 h-12 hover:scale-x-110' src={"img/logo.svg"} />
                    <div className='inline-block text-white'>
                        <a className='inline-block ml-5 hover:scale-x-110'>Menu</a>
                    </div>
                    </div>
                </li>

                <li className="mt-7 mr-7">
                    <a className="inline-block text-gray-300 hover:scale-x-110" href="#">
                        Hire me !
                    </a>
                </li>
            </ul>

        </section>
    );
}