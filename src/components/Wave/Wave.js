import React from "react";
import "./Wave.css"

function Wave() {
    return(
        <svg className='waves' preserveAspectRatio='none' shapeRendering='auto' viewBox='0 24 150 28' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink' transform="rotate(180)">
            <defs>
                <path d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z' id='gentle-wave'/>
            </defs>
            <g className='parallax'>
                <use fill='rgba(250,189,194, 1)' x='50' xlinkHref='#gentle-wave' y='2'/>
                <use fill='#e3636d4f' x='50' xlinkHref='#gentle-wave' y='0'/>
                <use fill='#fd5360' x='50' xlinkHref='#gentle-wave' y='6'/>
            </g>
        </svg>
    )
}

export default Wave;