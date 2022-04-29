import React from 'react';
const App = ({title,img,para}:{title:string,img:string,para:string})=>{
    return <div className='easy-card main-heading'>
        <img src={img}/>
        <h1 className='sm'>{title}</h1>
        <h5>{para}</h5>
    </div>
}
export default App