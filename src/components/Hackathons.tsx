import React from "react";
import { Card } from "./Card";
import defnetIMG from "~/assets/defnet.png"
import { GridCarousel } from "./Carousel";

const HACKATHONS = [
    {
        imgURL: "https://www.cloudfest.com/wp-content/uploads/2022/10/CloudFest_2023_event-1.jpg",
        title: "An international cloud computing conference featuring industry leaders, " +
            "experts, and innovators. Attended by thousands of participants from around the world.",
    },
    {
        imgURL: "https://storage.googleapis.com/lablab-static-eu/images%2Fevents%2Fclar54a4a0000356n3mordhvt%2Fclar54a4a0000356n3mordhvt_ue13no1_thumbnailLink.jpg",
        title: "A coding competition for developers using the Claris platform. Competed against " +
            "over 7000 participants from various countries.",
    },
    {
        imgURL: defnetIMG,
        title: "A cybersecurity hackathon focused on developing innovative solutions for securing " +
            "digital networks and data. Participated in the event as a team member.",
    },
    {
        imgURL: "https://educ.isen-mediterranee.fr/wp-content/uploads/2021/04/wavegame2021.jpg",
        title: "Cybersecurity hackathon focusing on preventing system compromise. Currently participating.",
    },
    {
        imgURL: "https://i.ytimg.com/vi/OxNag_Bvut4/maxresdefault.jpg",
        title: "Won 1st place at Massa hackathon by developing a music streaming platform based on equity, "+
            "addressing a pressing social issue, on their blockchain for ART.",
    },
    {
        imgURL: "https://d1guu6n8gz71j.cloudfront.net/system/post/previews/6466273/big.jpeg?1666278549",
        title: "Participated in Societe Generale's hackathon, placed fourth with an AI-powered traffic " +
            "light management project with potential to revolutionize transportation.",
    },
]

// TODO: Add description of events etc...
class Hackathons extends React.Component {
    render() {
        return (
            <section className="h-auto w-full dark:bg-background bg-white text-center px-4 py-20 dark:text-white text-dark items-center flex flex-col" id='hackathons-ctf'>
                <h1 className="font-bold text-4xl tracking-wider pb-4">Hackathons/CTF I've done</h1>
                <p className="p-4 text-lg font-bold pb-[40px] md:w-1/2 max-w-[500px] text-justify">
                    Here are some of the hackathons and CTFs that I have participated in, showcasing my passion and skills in problem-solving, teamwork, and innovation.
                </p>
                <div className="w-full max-w-[600px] items-center justify-center flex lg:hidden">
                    <GridCarousel cols={1} rows={2} gap={5}
                                    reverseColor={true}
                     >
                        {
                            HACKATHONS.map((elt) => {
                                return <Card
                                    imgURL={elt.imgURL}
                                    title={elt.title}
                                    buttonTitle={""}
                                />
                            })
                        }
                    </GridCarousel>
                </div>

                <div className="w-full max-w-[900px] items-center justify-center flex hidden lg:block">
                    <GridCarousel cols={2} rows={3} gap={5}
                                    reverseColor={true}
                    >
                        {
                            HACKATHONS.map((elt) => {
                                return <Card
                                    imgURL={elt.imgURL}
                                    title={elt.title}
                                    buttonTitle={""}
                                />
                            })
                        }
                    </GridCarousel>
                </div>
            </section>
        );
    }

}

export default Hackathons;