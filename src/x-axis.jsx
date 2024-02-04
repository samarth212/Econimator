import { useState } from 'react'

export default function XAxis(){
    const [xAxisProps, setXAxisProps] = useState({
        numTicks: 0,
        numInc: 0,
    })

    function handleInput(e){
        setXAxisProps({
          ...xAxisProps,
          [e.target.name]: parseInt(e.target.value, 10),
        })
    }

    function renderXTicks(){
        const ticks = []
        for (let i = 0; i < xAxisProps.numTicks; i++) {
            const tickValue = i * xAxisProps.tickIncrement
            ticks.push(tickValue)
        }
        return ticks
    }
}