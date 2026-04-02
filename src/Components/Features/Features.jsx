import React from 'react'
import feturesData  from '../../content/features.json'
import Feature from './Feature'

const Features = () => {
  return (
    <div>
        {feturesData.map((feature)=>(
            <Feature  key={feature.id}   {...feature}/>
        ))}
    </div>
  )
}

export default Features