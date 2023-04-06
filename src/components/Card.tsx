import React from "react";
import "~/styles/Card.css"

interface CardProps {
    imgURL: string,
    title: string,
    buttonTitle: string,
    isVideo: boolean
}

export class Card extends React.Component<CardProps> {
    static defaultProps = {
        isVideo: false
    }

    render(): React.ReactNode {
        return (
            <div className="card-container group">
                <img src={this.props.imgURL} className="group-hover:scale-[1.2]" />

                <figcaption
                className="group-hover:opacity-100">
                    <h3 className="max-w-[400px] text-justify">{this.props.title}</h3>
                    <button type="button">
                        {this.props.buttonTitle}
                    </button>
                </figcaption>
            </div>

        )
    }
}