import './yaxis.css'
import { useState } from 'react'


export default function YAxis(){

    const numTicks = 10
    const spacing = 700/(numTicks-1)

    let tickPositions = [];

    for (let i = 0; i < numTicks; i++) {
        tickPositions.push(i * spacing);
    }

    return(
        <>
            <div className="yaxis-line">
                {
                    tickPositions.map((position) => (
                        <div key={position} className="y-tick" style={{ bottom: `${position}px` }}></div>

                    ))
                }


            </div>
        </>
    )
}