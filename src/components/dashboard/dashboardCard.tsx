import React from 'react';
export default ({ icon, title }:{icon:()=>any, title:string}) => {
    return <div className="dashboard-card">
        <div className="c-img">
            {icon()}
        </div>
        <h4>{title}</h4>
    </div>
}