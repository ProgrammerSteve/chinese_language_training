import React from 'react';

const Score=({score,total})=>(
        <div className="h-8 grid place-content-center w-[16rem] sm:w-80 mx-auto text-white text-xl">
            <span>{`${score} / ${total}`}</span>
        </div>
    )

export default Score;
// <span>{`${score?score:'-'} / ${total?total:'-'}`}</span>