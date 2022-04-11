import React from 'react';

const images=["https://cdn.wallpaper.com/main/2015/10/heesen_p.jpg","https://pro-theme.com/html/nevica/assets/img/b001.jpg","https://pro-theme.com/html/nevica/assets/img/b001.jpg","https://demo.themeies.com/davit/images/slider/slider3.jpg"]
export default ()=>{
    return <div>
    
    <main>
   
      
      <section className="results-section results--grid">
       {
           images.map(x=> <a href='/service' className="profile">
           <div className="profile__image"><img src={x} alt="yacht" /></div>
           <div className="profile__info">
             <h4>Boat Wash</h4>
             <p className="profile__info__extra">A very good boi that loves playing fetch and ice-cream! Gentle with everyone. Scared of the rain.</p>
             <div className='profile-box'>
                 <div>
                     <p>Price</p>
                     <p><strong>100 AED</strong></p>
                 </div>
                 <div>
                     <p>Ratting</p>
                     <p><strong>5/5</strong></p>
                 </div>
                 <div>
                     <p>Service By</p>
                     <p><strong>ABT PVT.LTD</strong></p>
                 </div>
             </div>
           </div>
           
          </a>)
       }
       
   
      </section>
    </main>
   
  </div>
  
}