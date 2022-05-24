import { zip } from 'lodash';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IEOrderItems, IItem } from '../../../interfaces/data/objects';
import { IReduxStore } from '../../../interfaces/data/reduxStore';
import { ImageUrl } from '../../../utiles/baseUrl';

 export default ({items}:{items:any})=>{
    
    return <div>
    
    <main>
   
      
      <section className="results-section results--grid">
       {
           items.map((x:IEOrderItems)=> <a style={{cursor:'pointer'}}   className="profile">
           <div className="profile__image"><img src={ImageUrl + x?.eProduct?.image} alt="yacht" /></div>
           <div className="profile__info">
             <h4>{x?.eProduct?.title}</h4>
             <p className="profile__info__extra">{x?.eProduct?.description}</p>
             <div className='profile-box'>
                 <div>
                     <p>Purchase Price</p>
                     <p><strong>{
                       
                       x.purchasePrice
                       } AED</strong></p>
                 </div>
                 <div>
                     <p>Orignal Price</p>
                     <p><strong>{x.orignalPrice}</strong></p>
                 </div>
                 <div>
                     <p>Discount On Product</p>
                     <p><strong>{x.discountPer}</strong></p>
                 </div>
             </div>
           </div>
           
          </a>)
       }
       
   
      </section>
    </main>
   
  </div>
  
}