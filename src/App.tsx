import './App.css'; // Assuming your CSS is defined here

import { useDimensions } from './hooks/UseDimensions'
import { Routes, Route, Link, Navigate, useLocation } from 'react-router-dom'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'
import { Canvas3D, Canvas4D, CenVert, Checkbox, ControlPanel, SliderContainer, SwitchButton } from './components'
import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'

export const planes = ['zw', 'yw', 'yz', 'xw', 'xz', 'xy'] as const
export type pName = typeof planes[number]

export const axes = ['x', 'y', 'z'] as const
export type aName = typeof axes[number]
import { config } from '@react-spring/web'
import { easings } from '@react-spring/web'
import { MyGrid, Centered, Face} from './Graph'

function getRandomElementsFromArray<T>(array: T[], n: number): T[] {
  if (n <= 0) {
    return [];
  }

  n = Math.min(n, array.length - 1)

  const randomIndices: number[] = [];
  const result: T[] = [];

  // Generate unique random indices
  while (randomIndices.length < n) {
    const randomIndex = Date.now() % array.length
    // const randomIndex = Math.floor(Math.random(Date.now()) * array.length);
    if (!randomIndices.includes(randomIndex)) {
      randomIndices.push(randomIndex);
    }
  }

  // Select elements from the array using the random indices
  for (const index of randomIndices) {
    result.push(array[index]);
  }

  return result;
}


const App = (): JSX.Element => {

  const { pathname } = useLocation()
  const [fourD, setFourD] = useState(['/', '/4d'].includes(pathname))
  const [speed, setSpeed] = useState(0)
  const [selectedAxes, setSelectedAxes] = useState(['x', 'y', 'z'] as aName[])
  const [selectedPlanes, setSelectedPlanes] = useState(['yz', 'xw', 'zw'] as pName[])
  var [width, height] = useDimensions()
  const primary = '#434a91'
  // const [width, height] = [1000, 1000]
  // height = height / 10


  const [animationValue, setAnimationValue] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);
  
//    <h3> {animationValue} </h3>
 //   <button onClick={animate}>Start Animation</button>
    const animate = () => {
      setIsAnimating(true);
      setAnimationValue(0);
    };
  
  const rotatables  = ['zw', 'yw', 'yz', 'xw', 'xz', 'xy']
  const anim_speed = 2

  //var angleCount = Math.floor(1 + Math.random() * (rotatables.length-1))
  //var planes = getRandomElementsFromArray(rotatables, angleCount)
  //console.log(planes)
  //setSelectedPlanes(planes as pName[])
    useEffect(() => {
      if (isAnimating) { 

        const startTime = Date.now();
        const animationDuration = 2000 * Math.PI; // multiple of 1/2 pi
  
        const animateElement = () => {
          const currentTime = Date.now();
          const elapsedTime = currentTime - startTime;
  
          if (elapsedTime < animationDuration) {

            // Use a sine function to create an oscillating animation
            // const animationProgress = Math.abs(Math.sin((elapsedTime / animationDuration)));
            const animationProgress = elapsedTime/1000 // 3*Math.abs(Math.sin((elapsedTime/1000))) // animationDuration)));
            setAnimationValue(animationProgress* anim_speed); // Adjust the multiplier based on the desired range
            // setSpeed(animationProgress*100);
            requestAnimationFrame(animateElement);
          } else {
            // Animation has finished
            var angleCount = Math.floor(3 + Math.random() * (rotatables.length-1))
            var planes = getRandomElementsFromArray(rotatables, angleCount)
            console.log(planes)
            setSelectedPlanes(planes as pName[])
            setIsAnimating(false);
            setAnimationValue(0);
            setSpeed(0);
          }
        };
  
        requestAnimationFrame(animateElement);
      }
    }, [isAnimating]);
  



  const handleChange = (toggle: string): void => {
    const curState = (fourD ? selectedPlanes : selectedAxes) as string[]
    const index = curState.indexOf(toggle)

    if (index !== -1) {
      curState.splice(index, 1)
    } else {
      curState.push(toggle)
    }

    if (fourD) {
      setSelectedPlanes(curState as pName[])
    } else {
      setSelectedAxes(curState as aName[])
    }
  }
// <Face/>
  
  return <>
    <div className="centered-container">
    <Routes> 
      <Route path='/4d' element={ <Canvas4D speed={0} width={width} height={height} selectedPlanes={selectedPlanes} rotation={animationValue} />} />
      <Route path="/" element={<Navigate replace to='/4d'/>} />
    </Routes>
            <MyGrid triggerAnim="hi"/>
            <div className="content">

            </div>
        </div>
  </>

}

export default App
