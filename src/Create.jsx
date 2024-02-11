import './create.css'

import XAxis from './XAxis.jsx'
import YAxis from './YAxis.jsx'
import Input from './Inputs.jsx'

export default function Create(){
    return(
        <>
            <div className="create-bg">

                <XAxis></XAxis>
                <YAxis></YAxis>
                <Input></Input>



            </div>
        </>
    )
}