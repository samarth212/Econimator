import './xaxis.css'
import { useState } from 'react'


export default function XAxis(){

    const numTicks = 5
    const spacing = 800/(numTicks-1)

    let tickPositions = [];

    for (let i = 0; i < numTicks; i++) {
        tickPositions.push(i * spacing);
    }

    return(
        <>
            <div className="xaxis-line">
                <div className="x-tick"></div>


            </div>
        </>
    )
}