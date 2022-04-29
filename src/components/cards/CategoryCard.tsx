 import React from 'react';
 import Link from 'next/link'; 
 import { useIntl } from "react-intl";
 import router,{useRouter} from "next/router";
import { useSelector } from 'react-redux';

const App =({type,backgroundImage,title,subHeading}:{type?:string,backgroundImage?:string,title:string,subHeading?:string})=>{
  const intl = useIntl();
  const { language } = router.query;
  const Language=useSelector(x=>x.Language);

  return <div className="mb-4 w-100 catbx">
   <Link href={Language!=undefined?Language+'/explore':'/en-AE/explore'}>
   <div className="image-text-overlay image-text-overlay1 text-bottom-left text-white" style={{
        backgroundImage :`url('${backgroundImage}')`
    }}>
      <div className="container">
        <div className="inner-overlay-text">
          <p className=''>
           
             <span className={`overlay-title ${type!=undefined && type=="sm"?"text-sm-ov":""}`}>
              {title} 
            </span>
            <br></br>
            <span  className={`overlay-subtext ${type!=undefined && type=="sm"?"text-sm-ov1":""}`}>
             {subHeading?subHeading:intl.formatMessage({ id: "ar8" })}
            </span>
          </p>
         </div>
      </div>
      <div className="overlay-black"></div>
    </div>
   </Link>
</div>
}

export default App