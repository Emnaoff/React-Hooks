import React from 'react';


function Details({match,what}) {
    

   const found=what.find ((el)=>el.id == match.params.id)
    return (
        <div className="Dets">

           <h1 className="TitleDet">{found.title} </h1>
            <p>{found.description}</p>
           <span> <img className="imagedet"src={found.image}/> </span>
                 {found.trailer}
        </div>
    )
}

export default Details;
