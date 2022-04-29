import React from 'react';
const App=({title,subtitle,center,size}:{title:string,subtitle:string,center?:boolean,size?:string})=>{
    return <div className={`main-heading ${center?"text-center":""}`}>
        <h5  >{title}</h5>
        <h1 className={`${size?size:""}`}>{subtitle}</h1>
    </div>
}
export default App