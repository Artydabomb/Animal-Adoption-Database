import React from "react";
import Footer from "../Footer/Footer"
import "./About.css"

function About() {
    return (
        <>
            <div className="tile-is-ancestor main">
                <div className="tile is-parent">
                    <div className="tile is-child box">
                        <div className="columns is-centered">
                            <div className="column is-four-fifths has-text-centered">
                                <h1 className="title is-1 m-5">About Cosmopawlitan</h1>
                                <p className="subtitle mt-5">Cosmopawlitan is a web application developed by five graduates from the UC Davis Full-Stack Web Development Bootcamp. Our goal is to create an online pet-adoption portal to help potential owners find a new companion, while also furthering our own familiarity with key web development tools such as React, NoSQL Databases, user authentication, Express servers, and more. To learn more about Cosmopawlitan or to contact the developers, visit this project's <a href="https://github.com/Artydabomb/Animal-Adoption-Database" target="_blank" rel="noopener noreferrer">GitHub page.</a></p>
                                <br></br>
                                {/* <h3 className="title is-3 mb-5">Developers</h3> */}
                                {/* Card Component will go here */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <Footer />
        </>
    );
}

export default About