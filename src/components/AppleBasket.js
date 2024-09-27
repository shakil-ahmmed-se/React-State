import React from 'react';

const AppleBasket = ({ appleCount, basketName }) => {

    const basketType =()=>{
        if(appleCount === 10){
            return <span className={{color : 'green'}}> (Basket Full)</span>;
        }
        else if(appleCount < 10 && appleCount > 0){
            return <span></span>
        }
        else{
            return <span className="red-text"> (Basket Empty)</span>;
        }
    };
    // console.log(basketType)
    return (
        <div className="apple-basket">
            <h1>
                <span>{appleCount}</span> apples
            </h1>
            <p>
                {basketName}
                {basketType()}
                 
            </p>
    </div>
    );
};

export default AppleBasket;