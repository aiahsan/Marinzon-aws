 
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
    const [tags,settags]= React.useState( [
        { id: "1", text: "General dusting and mopping of accessible areas inside the house" },
        { id: "2", text: "Kitchen cleaning, trash removal and vessel washing" }
     ]);
    const [suggestions,setsuggestions]=React.useState([
        { id: '3', text: 'Linens changing and making up the beds' },

     ]);

   const handleDelete=(i:number)=> {
    settags( tags.filter((tag, index) => index !== i))
   }

   const handleAddition=(tag:tagInterface)=> {

        settags([...tags, tag])

    }

   

     return (
        <div className={`t-parent ${cstclass?cstclass:""}`}>
            <p>{title}</p>
            <ReactTags
            tags={tags}
                suggestions={suggestions}
                handleDelete={handleDelete}
                handleAddition={handleAddition}
                readOnly={isEditable?true:false}
                delimiters={delimiters} />
        </div>
    )
}
