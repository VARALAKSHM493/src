import React from 'react'
import Andhrabank from './Andhrabank'
import Corporatiobank from './Corporatiobank'

export default function Unionbank() {
    let data={
        firstName:'varshu',
        lastName:'vallepalli'
    }
    return (
        <div>
           <Andhrabank info={data}/> 
           <Corporatiobank info={data}/>
        </div>
    )
}

