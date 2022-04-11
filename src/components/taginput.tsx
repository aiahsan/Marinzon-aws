 
import React from 'react';
//@ts-ignore
 import { WithContext as ReactTags } from 'react-tag-input';

const KeyCodes = {
  comma: 188,
  enter: [10, 13],
};

const delimiters = [...KeyCodes.enter, KeyCodes.comma];

interface tagInterface{
    id:string,
    text:string
};
export default ({title,isEditable,cstclass}:{title:string,isEditable?:Boolean,cstclass?:string})=>{
    const [tags,settags]= React.useState( []);
    const [suggestions,setsuggestions]=React.useState([
        { id: 'Cleaning', text: 'Cleaning' },
        { id: 'Maintaining', text: 'Maintaining' },
        { id: 'Plumbring', text: 'Plumbring' },
        { id: 'Serive', text: 'Serive' },
       
     ]);

   const handleDelete=(i:number)=> {
    settags( tags.filter((tag, index) => index !== i))
   }

   const handleAddition=(tag:string)=> {
        //@ts-ignore
        settags([ tag,...tags])

    }


   

     return (
        <div className={`t-parent ${cstclass?cstclass:""}`}>
            
            <p className='dskfhods-asdsad'>Service Item Name <span>ex: What size is your Yacht?</span></p>
            
            <input type="text" className='ReactTags__tagInputField' placeholder='What size is your Yacht?'/>
             
            <p className='dskfhods-asdsad'>Service Item Value and Price</p>
                <div className='d-flex flex-wrap'>
                {
                tags.map(x=> <div className="ReactTags__selected"><span className="tag-wrapper ReactTags__tag" style={{opacity: 1, cursor: 'move'}} draggable="true">1 Bedroom Flat Price: 25 AED<button className="ReactTags__remove" type="button" aria-label="Tag at index 0 with value ads focussed. Press backspace to remove">×</button></span><div className="ReactTags__tagInput">
                    </div></div>  )
            }
                </div>
            <div className='d-flex align-items-center dafdsf-cdsfs flex-wrap'>
            <p>Value:</p>
            <input type="text" className='ReactTags__tagInputField' placeholder='1 Bedroom Flat'/>
            <p> Price: </p>
           
            <input type="number"  className='ReactTags__tagInputField' placeholder='25 AED'/>
            </div>
            <div className=''>
            
                <button className='btn sakdhsad-dsad' onClick={()=>{
                    handleAddition("value")
                }}>Add Value</button>
            </div>
        </div>
    )
}
