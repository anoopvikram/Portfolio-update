import React from "react";
import "./styles/Home.css";
import TechLove from "../components/TechLove";
import Footer from "../components/Footer";
import Header from "../components/Header.js";
import TypingEffect from "../components/Typing.js";

function Home() {

    return (
        <>
            <Header/>
            <div className="home-bg"></div>
            <div className="whole">
                <div className="home-page">
                    <div className="tech"><TechLove/></div>
                    <div className="heading">
                        <h1>Anoop Vikram</h1>
                        <h2>Web Developer.</h2>
                    </div>
                </div>
                <div className="mobile-note animated-note">
                    <TypingEffect
                        text={`Yeah, it’s <span class="span-text">fine</span> on your <span class="span-text phone-text">phone</span>, but on a <span class="span-text desktop-text">desktop</span>? 
                        That’s where it gets <span class="span-text colorful">colorful</span> — at least <span class="span-text half">half</span> of it. 
                        Hop on a desktop. It's mildly better. <br><span class="span-text maybe">Maybe</span>.`}
                        speed={25}
                        />
                </div>
                <Footer/>
            </div>
            
        </>
    );
}

export default Home;
