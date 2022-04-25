import { zip } from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IItem } from '../../../interfaces/data/objects';
import { IReduxStore } from '../../../interfaces/data/reduxStore';
import { ImageUrl } from '../../../utiles/baseUrl';

 export default ({items}:{items:any})=>{
    
    return <div>
    
    <main>
   
      
      <section className="results-section results--grid">
       {
           items().map((x:IItem)=> <a href='/service' className="profile">
           <div className="profile__image"><img src={ImageUrl + x?.image} alt="yacht" /></div>
           <div className="profile__info">
             <h4>{x.title}</h4>
             <p className="profile__info__extra">{x.description}</p>
             <div className='profile-box'>
                 <div>
                     <p>Price</p>
                     <p><strong>{
                       //@ts-ignore
                       Math.min.apply(Math, x.serviceItemServices?.map(y=>y.serviceItemServicePrices?.map(c=>c.serviceItemServiceValue)).flatMap((j)=>[...j])) 
                       } AED</strong></p>
                 </div>
                 <div>
                     <p>Ratting</p>
                     <p><strong>5/5</strong></p>
                 </div>
                 <div>
                     <p>Service By</p>
                     <p><strong>{x.user?.fullName}</strong></p>
                 </div>
             </div>
           </div>
           
          </a>)
       }
       
   
      </section>
    </main>
   
  </div>
  
}