import React from 'react'
import Card from '../card/card';


const Cards= ({c}) => {
  return (
    <div className="f">
      {c.map(el=><Card   title={el.title} 
                             description={el.description}
                             posterUrl={el.posterUrl}
                             id={el.id}
                             key={el.id}
                             rating={el.rating}
                             
                          
                             />)
                             }
      </div>
  )
};
export default Cards; 

