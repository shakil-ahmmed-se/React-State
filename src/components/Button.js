import React from 'react';

const Button = (props) => {
    const {imageURL, ButtonTitle, clickHandler} = props;
    return (
      <button onClick={clickHandler} title={ButtonTitle}>
        <img src={imageURL} alt="BUTTON" />
      </button>
    );
};

export default Button;