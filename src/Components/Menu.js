import React, { useState } from 'react';
import Block from './Block';
import Color from './Color';
/* Add any imports you think you might need here! */

const Menu = (props) => { 
    
    

    return (
    <div>
      <div className="colorOptions">
            <Color color="red" handleClick = {props.handleClick} ></Color> 
            <Color color="orange" handleClick = {props.handleClick} ></Color> 
            <Color color="yellow" handleClick = {props.handleClick} ></Color>         
      </div>
    </div>
    
    );
}

export default Menu;