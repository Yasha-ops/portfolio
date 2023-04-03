import React from "react";
import { Card } from "./Card";
import defnetIMG from "~/assets/defnet.png"

class Hackathons extends React.Component {
    render () {
        return (
            <section className="min-h-screen-custom w-full bg-white text-center text-dark px-4 py-20">
                <h1 className="font-bold text-4xl tracking-wider">Hackathons/CTF I've done</h1>
                <p className="p-4 pt-9 text-base font-bold">
                    Calvinouche de viarge de saint-cimonaque de Jésus de plâtre
                </p>

                <div className="flex flex-col md:grid md:grid-rows-2 md:grid-cols-4 gap-5">
                    <Card
                        imgURL="https://www.cloudfest.com/wp-content/uploads/2022/10/CloudFest_2023_event-1.jpg"
                        title="Bâtard de mosus de marde de cibouleau."
                        buttonTitle="Click me"
                    />
                    <Card
                        imgURL="https://storage.googleapis.com/lablab-static-eu/images%2Fevents%2Fclar54a4a0000356n3mordhvt%2Fclar54a4a0000356n3mordhvt_ue13no1_thumbnailLink.jpg"
                        title="Bâtard de mosus de marde de cibouleau."
                        buttonTitle="Click me"
                    />
                    <Card
                        imgURL={defnetIMG}
                        title="Bâtard de mosus de marde de cibouleau."
                        buttonTitle="Click me"
                    />
                    <Card
                        imgURL="https://educ.isen-mediterranee.fr/wp-content/uploads/2021/04/wavegame2021.jpg"
                        title="Bâtard de mosus de marde de cibouleau."
                        buttonTitle="Click me"
                    />
                    <Card
                        imgURL="https://d1guu6n8gz71j.cloudfront.net/system/post/previews/6466273/big.jpeg?1666278549"
                        title="Bâtard de mosus de marde de cibouleau."
                        buttonTitle="Click me"
                    />
                    </div>
            </section>
        );
    }

}

export default Hackathons;