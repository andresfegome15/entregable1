/* import bd from '../quotes.json'*/
/* import {useState} from 'react';  */
import React from 'react';
import Control from './Control'

const QuotesBox = () => {

    
    const colors=["#b4458d","#6b54d4","#186896","#37f3c4","#afff53","#f59a5e","#8b8a23","#555550"]
    
   const randomColors = Math.floor(Math.random()* colors.length) 
   
    return (
        <div className='card-container' style={{background:colors[randomColors]}}>
            <Control />
        </div>
    );
};

export default QuotesBox;