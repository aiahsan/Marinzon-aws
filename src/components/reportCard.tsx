import React from 'react';
export default ({title,sub}:{title:string,sub:String})=>{
    return <> <div className="reviews-section">
    <div className="first-rev-sec">
      <div className="rev-img pb-41">
        <img
          src="https://cdn.wallpaper.com/main/2015/10/heesen_p.jpg"
          alt=""
        />
        <div className="you-rev">
          <h3>{title}</h3>
          <p>Total {sub} {100}</p>
        </div>
      </div>
      <div className="cm-webs-12">
       
        <h6>Complete Web &amp; Mobile Designer in 2022...</h6>
      <div className='d-flex justify-content-end my-2'>
      <a  className='btn btn sakdhsad-dsad'>
        View Report  
        </a>
      </div>

      </div>
      
    </div>
   
  </div></>
}