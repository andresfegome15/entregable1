import React from 'react';
import bd from '../quotes.json'
import {useState} from 'react';


const Control = () => {
    let h = "#" + Math.floor(Math.random()*999999)
    const randomIndex = Math.floor(Math.random() * bd.length);
    const [index, setindex] = useState(randomIndex)

    document.body.style= `background:${h}`
    const changeAll = () => {
        const randomIndex = Math.floor(Math.random() * bd.length);
        setindex(randomIndex);

    } 
    return (
        <div>
            <span className='spanComi' style={{color:h}}>❞</span>
            <h2 className='quotePhrase' style={{color:h}}>{bd[index].quote}</h2>
            <h3 className='nameAuthor' style={{color:h}}>{bd[index].author}</h3>
            <button style={{background:h}} onClick={changeAll}><i className="fa-solid fa-caret-right"></i></button>
        </div>
    );
};

export default Control;