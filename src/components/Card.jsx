/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 card.gltf --transform
Author: Maksym Nekleva (https://sketchfab.com/maksym.nekleva)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/plastic-credit-card-4056fbcafe5e44e5810c84a2a836f9c1
Title: Plastic Credit Card
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF("/card-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Card__0.geometry}
        material={materials["Scene_-_Root"]}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/card-transformed.glb");