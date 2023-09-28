import React from "react";
import "../componenents/styles/home.css";
import { Card } from "semantic-ui-react";

export default function Home() {
    return (
        <div className="home-container">
            <div className="video-container">
                <video>

                </video>
                <p> here is some text might go over the video </p>
            </div>

            <div className="about-container">
                <Card className="about-card">
                    <Card.Header>
                        Z<sup>2</sup> Web Design
                    </Card.Header>
                    <Card.Meta>
                        Web Design / Web Developer Professionals
                    </Card.Meta>
                    <Card.Content>
                        here will be the content for the about me card...
                    </Card.Content>
                </Card>
            </div>

        </div>
    )
}