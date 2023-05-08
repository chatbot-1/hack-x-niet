import React from "react";
import "./intro.css";
import { Canvas } from "@react-three/fiber";
import {
  MeshDistortMaterial,
  OrbitControls,
  RenderTexture,
  Sphere,
  Stage,
  Text,
} from "@react-three/drei";
import Card from "../Card";
import he from "../../assets/he.png";
import Navbar from "../navbar/Navbar";

const Intro = () => {
  return (
    <div className="main">
      <div className="intro-nav">
        <Navbar />
      </div>

      <div className="intro section">
          <div className="intro-container">
            <img src={he} alt="" />
          </div>
          <div className="intro-logo">
            <h3>Scroll Down</h3>
          </div>
          <div className="intro-apply">
            <h3>Get Your Card</h3>
            <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default Intro;
