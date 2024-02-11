import './xaxis.css'
import { useState } from 'react'


export default function XAxis(){

    const distance = 50

    return(
        <>
            <div className="xaxis-line">
                <div className="x-tick" style={{ left: `${distance}px` }}></div>


            </div>
        </>
    )
}