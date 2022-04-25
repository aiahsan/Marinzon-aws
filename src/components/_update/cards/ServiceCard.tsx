import React from 'react';
 

 const App = ({title,img,bg,desc}:{title:string,img:string,bg?:string,desc?:string})=>{
     return <div className='d-flex service-card p-4' style={{backgroundColor:bg}}>
     <div >
         <h1>{title}</h1>
         <h5>{desc}</h5>
     </div>
     <div>
         <img src={img}/>
     </div>
 </div>
}
export default App