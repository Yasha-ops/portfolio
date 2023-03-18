import React from "react";
import "~/styles/Card.css"

interface CardProps {
    imgURL: string,
    title: string,
    buttonTitle: string
}

export class Card extends React.Component<CardProps> {
    render(): React.ReactNode {
        return (
            <div className="card-container group">
                <img src={this.props.imgURL}/>

                <figcaption>
                    <h3>{this.props.title}</h3>
                    <button type="button">
                        {this.props.buttonTitle}
                    </button>
                </figcaption>
            </div>

        )
    }
}
