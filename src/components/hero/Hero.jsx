import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import "./hero.css";
import {
  MeshDistortMaterial,
  OrbitControls,
  RenderTexture,
  Sphere,
  Stage,
  Text,
} from "@react-three/drei";
import card from "../../assets/card.png";
import { Animator, ScrollContainer, ScrollPage, Sticky } from "react-scroll-motion";


const Hero = () => {
  return (
    <div className="hero section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-title">
          <h1>Your Pocket Healthcare solution</h1>

            
                  <p>Your Pocket Healthcare solution</p>
                
          </div>
          <div className="hero-matter">
            <p>The healthcare credit card which will provide the emergency cash for the medical treament.</p>
          </div>
          <button className="hero-btn">Get Your Card Now</button>
        </div>
        <div className="hero-card">
          <Canvas>
            <ambientLight intensity={1}/>
            <Sphere args={[1, 200, 200]} scale={1.8}>
              <MeshDistortMaterial
                color="#3d1c56"
                attach="material"
                distort={0.4}
                speed={.5}
              />
            </Sphere>
            {/* <Stage environment="city" intensity={0.6} >
              <Card />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate/> */}
          </Canvas>
          <img src={card} className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
