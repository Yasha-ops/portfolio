import React from "react";
import { Card } from "./Card";
import defnetIMG from "~/assets/defnet.png"
import { GridCarousel } from "./Carousel";

const HACKATHONS = [
    {
        imgURL: "https://www.cloudfest.com/wp-content/uploads/2022/10/CloudFest_2023_event-1.jpg",
        title: "Bâtard de mosus de marde de cibouleau.",
        buttonTitle: "Click me",
    },
    {
        imgURL: "https://storage.googleapis.com/lablab-static-eu/images%2Fevents%2Fclar54a4a0000356n3mordhvt%2Fclar54a4a0000356n3mordhvt_ue13no1_thumbnailLink.jpg",
        title: "Bâtard de mosus de marde de cibouleau.",
        buttonTitle: "Click me",
    },
    {
        imgURL: defnetIMG,
        title: "Bâtard de mosus de marde de cibouleau.",
        buttonTitle: "Click me",
    },
    {
        imgURL: "https://educ.isen-mediterranee.fr/wp-content/uploads/2021/04/wavegame2021.jpg",
        title: "Bâtard de mosus de marde de cibouleau.",
        buttonTitle: "Click me",
    },
    {
        imgURL: "https://i.ytimg.com/vi/OxNag_Bvut4/maxresdefault.jpg",
        title: "Bâtard de mosus de marde de cibouleau.",
        buttonTitle: "Click me",
    },
    {
        imgURL: "https://d1guu6n8gz71j.cloudfront.net/system/post/previews/6466273/big.jpeg?1666278549",
        title: "Bâtard de mosus de marde de cibouleau.",
        buttonTitle: "Click me",
    },
]

// TODO: Add description of events etc...
class Hackathons extends React.Component {
    render() {
        return (
            <section className="min-h-screen-custom w-full dark:bg-background bg-white text-center px-4 py-20 dark:text-white text-dark" id='hackathons-ctf'>
                <h1 className="font-bold text-4xl tracking-wider ">Hackathons/CTF I've done</h1>
                <p className="p-4 text-lg font-bold pb-[40px]">
                    Calvinouche de viarge de saint-cimonaque dpode  de Jésus de plâtre
                </p>
                <GridCarousel cols={1} rows={2} gap={5}>
                    {
                        HACKATHONS.map((elt) => {
                            return <Card
                                imgURL={elt.imgURL}
                                title={elt.title}
                                buttonTitle={elt.buttonTitle}
                            />
                        })
                    }
                </GridCarousel>
            </section>
        );
    }

}

export default Hackathons;