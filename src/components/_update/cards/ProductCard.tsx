import { zip } from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IItem } from '../../../interfaces/data/objects';
import { IReduxStore } from '../../../interfaces/data/reduxStore';
import { ImageUrl } from '../../../utiles/baseUrl';

 export default ({items,onClick}:{items:any,onClick:any})=>{
    
    return <div>
    
    <main>
   
      
      <section className="results-section results--grid">
       {
           items().map((x:IItem)=> <a style={{cursor:'pointer'}} onClick={()=>onClick(x)} className="profile">
           <div className="profile__image"><img src={ImageUrl + x?.image} alt="yacht" /></div>
           <div className="profile__info">
             <h4>{x.title}</h4>
             <p className="profile__info__extra">{x.description}</p>
             <div className='profile-box'>
                 <div>
                     <p>Price</p>
                     <p><strong>{
                      x.displayPrice
                      } AED</strong></p>
                 </div>
                 <div>
                     <p>Ratting</p>
                     <p><strong>5/5</strong></p>
                 </div>
                 <div>
                     <p>Service By</p>
                     <p><strong>{x.serviceBy}</strong></p>
                 </div>
             </div>
           </div>
           
          </a>)
       }
       
   
      </section>
    </main>
   
  </div>
  
}