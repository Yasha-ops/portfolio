/*
  Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef, useEffect } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

function getMouseDegrees(x, y, degreeLimit) {
  let dx = 0,
    dy = 0,
    xdiff,
    xPercentage,
    ydiff,
    yPercentage;

  let w = { x: window.innerWidth, y: window.innerHeight };

  // Left (Rotates neck left between 0 and -degreeLimit)

  // 1. If cursor is in the left half of screen
  if (x <= w.x / 2) {
    // 2. Get the difference between middle of screen and cursor position
    xdiff = w.x / 2 - x;
    // 3. Find the percentage of that difference (percentage toward edge of screen)
    xPercentage = (xdiff / (w.x / 2)) * 100;
    // 4. Convert that to a percentage of the maximum rotation we allow for the neck
    dx = ((degreeLimit * xPercentage) / 100) * -1;
  }

  // Right (Rotates neck right between 0 and degreeLimit)
  if (x >= w.x / 2) {
    xdiff = x - w.x / 2;
    xPercentage = (xdiff / (w.x / 2)) * 100;
    dx = (degreeLimit * xPercentage) / 100;
  }
  // Up (Rotates neck up between 0 and -degreeLimit)
  if (y <= w.y / 2) {
    ydiff = w.y / 2 - y;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    // Note that I cut degreeLimit in half when she looks up
    dy = (((degreeLimit * 0.5) * yPercentage) / 100) * -1;
  }

  // Down (Rotates neck down between 0 and degreeLimit)
  if (y >= w.y / 2) {
    ydiff = y - w.y / 2;
    yPercentage = (ydiff / (w.y / 2)) * 100;
    dy = (degreeLimit * yPercentage) / 100;
  }
  return { x: dx, y: dy };
}

function getMousePos(e) {
  return { x: e.clientX, y: e.clientY };
}

document.addEventListener('mousemove', function (e) {
  var mousecoords = getMousePos(e);
});

const degToRad = deg => (deg * Math.PI) / 180.0;

function findIndexKey(object, key) {
  return Object.keys(object).findIndex((elt) => elt === key);
}

/* 
  Model
*/
export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/avatar.glb')
  const { actions } = useAnimations(animations, group)

  console.log(findIndexKey(nodes.Wolf3D_Avatar.morphTargetDictionary, "eyeBlinkLeft"));

  /* Launch Animation */
  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function launchAnimation(morphIndex, delay, incr, limit) {
    let value = nodes.Wolf3D_Avatar.morphTargetInfluences[morphIndex];

    console.log("========== START ==========")
    console.log("Limit : ", limit);
    console.log("Value : ", value);
    console.log("Incr : ", incr);


    for (; (incr < 0) ? value >= limit : value <= limit; value += incr) {
      await timeout(delay);
      console.log("Value :", value);
      nodes.Wolf3D_Avatar.morphTargetInfluences[morphIndex] += incr;
    }
  }

  /* IDLE Eyes */
  async function idleAnimation(event, morphIndex, delay, limitStart = 1, limitEnd = 0) {

    if (event.detail != 1)
      return;

    console.log("LimitStart : ", limitStart);
    console.log("LimitEnd : ", limitEnd);
    launchAnimation(morphIndex, delay, 0.1, limitStart).then(async () => {
      await timeout(700);
      launchAnimation(morphIndex, delay + 30, -0.1, limitEnd);
    });
  }
  /*  MoveJoint */
  const moveJoint = (mouse, joint, degreeLimit) => {
    let degrees = getMouseDegrees(mouse.x, mouse.y, degreeLimit);
    if (joint === nodes['LeftEye'] || joint === nodes['RightEye']) {
      joint.rotation.y = degToRad(degrees.x + (joint === nodes['RightEye'] ? -1 : 1) * 90);
      joint.rotation.x = degToRad(degrees.y + (joint === nodes['RightEye'] ? -1 : 1) * 90);
      return;
    }
    joint.rotation.y = degToRad(degrees.x);
    joint.rotation.x = degToRad(degrees.y);
  }
  document.addEventListener('mousemove', function (e) {
    var mousecoords = getMousePos(e);

    moveJoint(mousecoords, nodes['Head'], 5);
    moveJoint(mousecoords, nodes['Neck'], 2);
    moveJoint(mousecoords, nodes['LeftEye'], 10);
    moveJoint(mousecoords, nodes['RightEye'], 10);

  });


  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="AvatarRoot">
          <primitive object={nodes.Hips} />
          <skinnedMesh name="YassineFace"
            geometry={nodes.Wolf3D_Avatar.geometry}
            material={materials.Wolf3D_Avatar}
            skeleton={nodes.Wolf3D_Avatar.skeleton}
            morphTargetDictionary={nodes.Wolf3D_Avatar.morphTargetDictionary}
            morphTargetInfluences={nodes.Wolf3D_Avatar.morphTargetInfluences}
            onClick={(event) => {
              idleAnimation(event,
                findIndexKey(nodes.Wolf3D_Avatar.morphTargetDictionary, "mouthSmile"), 60, 0.7, 0.4);
              
              idleAnimation(event,
                findIndexKey(nodes.Wolf3D_Avatar.morphTargetDictionary, "mouthOpen"), 60, 0.3);
              
              //idleAnimation(event, 
              // findIndexKey(nodes.Wolf3D_Avatar.morphTargetDictionary, "eyeBlinkLeft"), 30);
              //idleAnimation(event, 
              //  findIndexKey(nodes.Wolf3D_Avatar.morphTargetDictionary, "mouthPressLeft"), 40);
            }}

          />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/avatar.glb')
