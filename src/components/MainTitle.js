import React from "react";
import {BrowserView, MobileView} from 'react-device-detect';

export default function MainTitle() {
    return (
        <section className="flex-none mt-28">
            <div className="mx-10 lg:mx-64">
                <div className="flex flex-col-reverse bg-red-500 lg:flex-row">
                    <div className="flex-1 text-center text-white font-Bitter md:text-left">
                        <div className="text-center text-title lg:text-left">
                            <h1>Hey, my </h1><h1>name is <strong>Yassine</strong></h1>
                        </div>

                        <h3 className="invisible transition duration-700 ease-in lg:visible">
                            I'm an independent creative developer from Abergavenny, South Wales.
                        </h3>
                    </div>

                    <div className="flex-1">
                        PouxyPouxyPouxy
                    </div>
                </div>
                <div className="flex justify-center items-center bg-blue-500">
                    Scroll
                </div>
            </div>
        </section>
    );
}