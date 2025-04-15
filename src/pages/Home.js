import React from "react";
import "./styles/Home.css"
import TechLove from "../components/TechLove";
import Footer from "../components/Footer";


function Home(){
    return(
        <div className="whole">
            <div className="home-page">
                <TechLove />
                <div className="heading">
                    <h1>Anoop Vikram</h1>
                    <h2>Web Developer.</h2>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;    