import React, { useState } from 'react';
import Button from './Button';
import RightArrow from '../assets/images/right-arrow.webp';
import LeftArrow from '../assets/images/left-arrow.webp'
import AppleBasket from './AppleBasket';
import './AppleCounter.css'

// const totalAppleCount = 10;
// let RightAppleCount = 0;
// let LeftAppleCount = totalAppleCount - RightAppleCount ;
const AppleCounter = (props) => {

    const [leftCount, setLeftCount] = useState(10);
    const [rightCount, setRightCount] = useState(0);
    const LeftClickHandler =()=>{
        if(rightCount > 0){
            // const count = leftCount + 1;
            setLeftCount(leftCount + 1);
            setRightCount(rightCount - 1);
        }
    }
    const RightClickHandler =()=>{
       if(leftCount > 0){
        setRightCount(rightCount + 1);
        setLeftCount(leftCount - 1);
       }
    }

    return (
        <section >
            <AppleBasket appleCount={leftCount} basketName='Basket-1'/>
            <Button clickHandler={LeftClickHandler} ButtonTitle='Left-Arrow' imageURL ={LeftArrow} />
            <Button clickHandler={RightClickHandler} ButtonTitle='Right-Arrow' imageURL ={RightArrow} />
            <AppleBasket appleCount={rightCount} basketName='Basket-2'/>

        </section>
    );
};

export default AppleCounter;