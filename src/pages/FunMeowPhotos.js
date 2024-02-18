import React from 'react';
import './FunMeowPhotos.css';
import images from "../images";




function FunMeowPhotos() {

  return (
    <div> 
      <h1 className="fun-title">Cats are magical, cute, and joy-bringing!</h1>
    
      <div className="photo-container">
      


      <div className="horizontal"><img src={images.fun7}/></div>
        <div className="vertical"><img src={images.cute8}/></div>
        <div className="horizontal"><img src={images.fun2}/></div>
        <div  className="big"><img src={images.cute21}/></div>
        <div className="vertical"><img src={images.cute2}/></div>
        
        <div className="vertical"><img src={images.fun11}/></div>
        <div className="horizontal"><img src={images.cute7}/></div>
       
        <div className="horizontal"><img src={images.cute4}/></div>
        <div className="horizontal"><img src={images.fun9}/></div>
        <div  className="big"><img src={images.cute5}/></div>


        <div className="horizontal"><img src={images.cute11}/></div>
        <div className="big" ><img src={images.cute16}/></div>
        <div className="horizontal"><img src={images.cute13}/></div>
        <div className="horizontal"><img src={images.cute6}/></div>
        <div className="vertical"><img src={images.cute3}/></div>
        <div className="horizontal"><img src={images.fun3}/></div>
        <div className="big"><img src={images.cute1}/></div>
        
        <div className="horizontal"><img src={images.cute10}/></div>
        <div className="vertical"><img src={images.cute12}/></div>
        <div><img src={images.cute19}/></div>
        <div className="big"><img src={images.fun14}/></div>
  
        <div  className="big"><img src={images.cute14}/></div>
        <div><img src={images.fun1}/></div>
        <div className="horizontal"><img src={images.fun5}/></div>
        <div className="vertical"><img src={images.cute9}/></div>
        <div className="horizontal"><img src={images.fun12}/></div>
        <div className="horizontal"><img src={images.cute15}/></div>
        <div className="vertical"><img src={images.fun8}/></div>
        <div  className="big"><img src={images.fun10}/></div>
        <div className="horizontal"><img src={images.fun4}/></div>
        <div className="vertical"><img src={images.fun6}/></div>
        <div className="horizontal"><img src={images.cute17}/></div>
        <div><img src={images.cute18}/></div>
        <div className="horizontal"><img src={images.fun13}/></div>
        <div><img src={images.cute20}/></div>
        <div className="horizontal"><img src={images.fun19}/></div>


   

  
     
      </div>

      </div>

  )
}

export default FunMeowPhotos;