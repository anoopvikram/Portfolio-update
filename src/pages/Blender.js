import React from "react";
import "./styles/blender.css"
import useMouseParallax from "../components/useMouseParallax.js";
import Header from "../components/Header.js";

function Blender(){

    const designs = [
        
        {
            id: 1,
            image: "/assets/blender/chips pack front.png"
        },
        {
            id: 2,
            image: "/assets/blender/beauty products.png"
        },
        {
            id: 3,
            image: "/assets/blender/riverside.png "
        },
         {
            id: 4,
            image: "/assets/blender/living room.png"
        },
        {
            id: 5,
            image: "/assets/blender/my desk.png"
        },
        ];

     const backgroundStyle = useMouseParallax(0.07);
        return(
            <>
                <Header/>
                <div className="contact-bg" style={backgroundStyle}></div>
                <h1>Art Gallery</h1>
                <p className="art-text">Here’s my growing collection of 3D art. Each piece has its own little story. 
                    Take a scroll — and tell me which one hits you the hardest.</p>
                <div className="design-grid">
                    {designs.map((design, index)=>(
                        <div className="design-card">
                            <img src={design.image} className="design-title" alt="art"/>
                        </div>
                    ))}
                </div>
            </>
        )
}

export default Blender;