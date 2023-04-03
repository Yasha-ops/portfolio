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
                {
                    this.props.isVideo
                        ? <video src={this.props.imgURL} className="group-hover:scale-[1.2]" autoPlay={true} loop/>
                        : <img src={this.props.imgURL} className="group-hover:scale-[1.2]" />
                }

                <figcaption
                className="group-hover:opacity-100">
                    <h3>{this.props.title}</h3>
                    <button type="button">
                        {this.props.buttonTitle}
                    </button>
                </figcaption>
            </div>

        )
    }
}